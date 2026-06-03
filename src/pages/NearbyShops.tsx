import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import basemapImage from '../data/Basemap_image.png';

// Обновил моковые данные, чтобы использовать картинки-заглушки для логотипов
const shops = [
  { id: '1', name: 'Asia Sport', logo: 'https://placehold.co/150x150/ffffff/1a1a1a?text=AS' },
  { id: '2', name: 'Velopro', logo: 'https://placehold.co/150x150/ff7f00/ffffff?text=V' },
  { id: '3', name: 'Gergert sport', logo: 'https://placehold.co/150x150/ffffff/d32f2f?text=G' },
  { id: '4', name: 'Jetim.KG', logo: 'https://placehold.co/150x150/e0e0e0/d32f2f?text=Velo' },
];

export const NearbyShops: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f4f7fb' }}>
      
      {/* Верхняя часть с картой */}
      <Box 
        sx={{ 
          height: '45vh', 
          position: 'relative',
          backgroundImage: `url('${basemapImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Кнопка "Назад" */}
        <IconButton 
          onClick={() => navigate(-1)}
          sx={{ 
            position: 'absolute', 
            top: 16, 
            left: 16, 
            bgcolor: '#dcefff', 
            color: '#0077a5',
            '&:hover': { bgcolor: '#c5e4ff' }
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Пины на карте (имитация) */}
        <Box sx={{ position: 'absolute', top: '40%', left: '30%', width: 16, height: 16, borderRadius: '50%', bgcolor: '#0077a5', border: '3px solid white' }} />
        <Box sx={{ position: 'absolute', top: '50%', left: '45%', width: 16, height: 16, borderRadius: '50%', bgcolor: '#0077a5', border: '3px solid white' }} />
        <Box sx={{ position: 'absolute', top: '60%', left: '40%', width: 16, height: 16, borderRadius: '50%', bgcolor: '#0077a5', border: '3px solid white' }} />
        <Box sx={{ position: 'absolute', top: '45%', left: '80%', width: 16, height: 16, borderRadius: '50%', bgcolor: '#0077a5', border: '3px solid white' }} />
      </Box>

      {/* Нижняя панель со списком */}
      <Box 
        sx={{ 
          flex: 1, 
          bgcolor: '#f4f7fb', 
          borderRadius: '24px 24px 0 0', 
          mt: '-24px', 
          position: 'relative', 
          pt: 4,
          px: 2,
          pb: 12
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: '#1a1a1a' }}>
          Мастерские рядом
        </Typography>

        <Stack spacing={2.5}>
          {shops.map((shop) => (
            <Box key={shop.id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Логотип магазина */}
              <Box 
                component="img" 
                src={shop.logo} 
                alt={shop.name}
                sx={{ 
                  width: 64, 
                  height: 64, 
                  borderRadius: '12px', 
                  border: '1px solid #0077a5',
                  objectFit: 'contain',
                  bgcolor: 'white'
                }} 
              />
              
              {/* Название */}
              <Typography variant="subtitle1" sx={{ flex: 1, fontWeight: 700, color: '#1a1a1a' }}>
                {shop.name}
              </Typography>
              
              {/* Кнопка "Перейти" */}
              <Button 
                variant="contained" 
                disableElevation
                onClick={() => navigate(`/shop/${shop.id}`)}
                sx={{ 
                  bgcolor: '#0077a5', 
                  color: 'white',
                  borderRadius: '8px', 
                  textTransform: 'none', 
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  '&:hover': { bgcolor: '#005f85' }
                }}
              >
                Перейти
              </Button>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};