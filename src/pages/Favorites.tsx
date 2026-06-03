import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Favorites: React.FC = () => {
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
          Избранное
        </Typography>
      </Box>

      {/* Пустая область (пока тут ничего нет, как на макете) */}
      <Box sx={{ px: 2, pt: 3 }}>
        {/* В будущем сюда можно будет добавить карточки сохраненных товаров из Каталога */}
      </Box>

    </Box>
  );
};