import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Divider, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// Обновленные моковые данные со статистикой и картинками
const listings = [
  { 
    id: '1', 
    title: 'Шоссейный велосипед', 
    price: '120 000 с', 
    status: 'Активно', 
    days: 14, 
    views: 342, 
    likes: 28,
    image: 'https://placehold.co/200x200/f4f7fb/8b9eb0?text=Bike'
  },
  { 
    id: '2', 
    title: 'Шлем для велосипеда', 
    price: '5000 с', 
    status: 'Активно', 
    days: 14, 
    views: 342, 
    likes: 28,
    image: 'https://placehold.co/200x200/f4f7fb/8b9eb0?text=Helmet'
  },
];

export const MyListings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f7fb', pb: 12 }}>
      
      {/* Шапка */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          px: 2, 
          py: 2, 
          bgcolor: 'white', 
          borderBottom: '1px solid #f0f5fa' 
        }}
      >
        <IconButton 
          onClick={() => navigate(-1)}
          sx={{ 
            bgcolor: '#dcefff', 
            color: '#0077a5', 
            mr: 2, 
            width: 40,
            height: 40,
            '&:hover': { bgcolor: '#c5e4ff' } 
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '1.1rem' }}>
          Мои объявления
        </Typography>
      </Box>

      {/* Вкладки "Активные" и "Проданные" */}
      <Box sx={{ display: 'flex', gap: 1.5, px: 2, py: 2 }}>
        <Box 
          sx={{ 
            bgcolor: '#0077a5', 
            color: 'white', 
            px: 2.5, 
            py: 1, 
            borderRadius: '8px', 
            fontWeight: 700, 
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          Активные (2)
        </Box>
        <Box 
          sx={{ 
            bgcolor: 'transparent', 
            border: '1px solid #e0e6ed', 
            color: '#8b9eb0', 
            px: 2.5, 
            py: 1, 
            borderRadius: '8px', 
            fontWeight: 700, 
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          Проданные (48)
        </Box>
      </Box>

      {/* Список объявлений */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {listings.map((item) => (
          <Box 
            key={item.id} 
            sx={{ 
              bgcolor: 'white', 
              borderTop: '1px solid #e0e6ed', 
              borderBottom: '1px solid #e0e6ed', 
              p: 2 
            }}
          >
            {/* Верхняя часть карточки (Картинка + Инфо) */}
            <Box sx={{ display: 'flex', gap: 2, mb: 1.5 }}>
              <Box 
                component="img" 
                src={item.image} 
                alt={item.title}
                sx={{ width: 88, height: 88, borderRadius: '12px', objectFit: 'cover', bgcolor: '#f0f5fa' }} 
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2, mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0077a5', mb: 1 }}>
                  {item.price}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      bgcolor: '#dcefff', 
                      color: '#0077a5', 
                      px: 1.5, 
                      py: 0.5, 
                      borderRadius: '6px', 
                      fontWeight: 800, 
                      fontSize: '0.75rem' 
                    }}
                  >
                    {item.status}
                  </Box>
                  <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 600 }}>
                    Осталось {item.days} дней
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ my: 1.5, borderColor: '#f0f5fa' }} />

            {/* Нижняя часть карточки (Статистика + Кнопка) */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', gap: 2, color: '#8b9eb0' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <VisibilityOutlinedIcon fontSize="small" />
                  <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.8rem' }}>
                    {item.views}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                  <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.8rem' }}>
                    {item.likes}
                  </Typography>
                </Box>
              </Box>
              
              <Button 
                variant="outlined" 
                size="small"
                sx={{ 
                  borderColor: '#0077a5', 
                  color: '#0077a5', 
                  fontWeight: 800, 
                  textTransform: 'none', 
                  borderRadius: '8px',
                  px: 3,
                  '&:hover': { bgcolor: '#f0f5fa', borderColor: '#005f85' }
                }}
              >
                Изменить
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
};