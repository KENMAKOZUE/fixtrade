import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Моковые данные с добавленными параметрами для кнопок и картинок
const deals = [
  { 
    id: '1', 
    title: 'Шоссейный велосипед', 
    price: '120 000 с', 
    state: 'Ожидает получение в ПВЗ',
    image: 'https://placehold.co/200x200/f4f7fb/8b9eb0?text=Bike',
    actionText: 'Подтвердить получение',
    actionType: 'primary' // Синяя залитая кнопка
  },
  { 
    id: '2', 
    title: 'Шоссейный велосипед', 
    price: '120 000 с', 
    state: 'В пути к покупателю',
    image: 'https://placehold.co/200x200/f4f7fb/8b9eb0?text=Bike',
    actionText: 'Отследить посылку',
    actionType: 'secondary' // Светло-голубая кнопка
  },
];

export const SafeDeals: React.FC = () => {
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
          bgcolor: 'white' 
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
          Безопасные сделки
        </Typography>
      </Box>

      {/* Информационный баннер */}
      <Box sx={{ px: 2, pt: 2, pb: 2, bgcolor: 'white' }}>
        <Box sx={{ bgcolor: '#dcefff', borderRadius: '12px', p: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 0.5 }}>
            Защита покупателя и продавца
          </Typography>
          <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 600, display: 'block', lineHeight: 1.3 }}>
            Оплата резервируется на специальном счете до успешного завершения сделки.
          </Typography>
        </Box>
      </Box>

      {/* Вкладки "Активные" и "Проданные" */}
      <Box sx={{ display: 'flex', gap: 1.5, px: 2, pb: 2, bgcolor: 'white', borderBottom: '1px solid #f0f5fa' }}>
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

      {/* Список сделок */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {deals.map((deal) => (
          <Box key={deal.id} sx={{ bgcolor: 'white', borderBottom: '1px solid #e0e6ed', p: 2 }}>
            
            {/* Картинка, Название и Цена */}
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box 
                component="img" 
                src={deal.image} 
                alt={deal.title} 
                sx={{ width: 88, height: 88, borderRadius: '12px', objectFit: 'cover', bgcolor: '#f0f5fa' }} 
              />
              <Box sx={{ pt: 0.5 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2, mb: 0.5 }}>
                  {deal.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0077a5' }}>
                  {deal.price}
                </Typography>
              </Box>
            </Box>

            {/* Плашка со статусом */}
            <Box 
              sx={{ 
                bgcolor: '#f4f7fb', 
                borderRadius: '12px', 
                py: 1.5, 
                mb: 1.5, 
                display: 'flex', 
                justifyContent: 'center' 
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0077a5' }}>
                {deal.state}
              </Typography>
            </Box>

            {/* Кнопка действия */}
            <Button 
              variant="contained" 
              fullWidth 
              disableElevation
              sx={{ 
                py: 1.5, 
                borderRadius: '12px', 
                // Логика цвета в зависимости от типа (primary/secondary)
                bgcolor: deal.actionType === 'primary' ? '#0077a5' : '#dcefff', 
                color: deal.actionType === 'primary' ? 'white' : '#0077a5',
                fontWeight: 800, 
                fontSize: '0.95rem',
                textTransform: 'none',
                '&:hover': { 
                  bgcolor: deal.actionType === 'primary' ? '#005f85' : '#c5e4ff' 
                }
              }}
            >
              {deal.actionText}
            </Button>
            
          </Box>
        ))}
      </Box>

    </Box>
  );
};