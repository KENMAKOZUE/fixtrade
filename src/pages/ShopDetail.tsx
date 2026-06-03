import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, IconButton, Button, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

// Создаем мини-базу данных магазинов прямо здесь (позже это будет приходить с сервера)
const shopsData = [
  { id: '1', name: 'Asia Sport', logo: 'src/data/shop/image 28.png' },
  { id: '2', name: 'Velopro', logo: 'https://placehold.co/150x150/ff7f00/ffffff?text=V' },
  { id: '3', name: 'Gergert sport', logo: 'https://placehold.co/150x150/ffffff/d32f2f?text=G' },
  { id: '4', name: 'Jetim.KG', logo: 'https://placehold.co/150x150/e0e0e0/d32f2f?text=Velo' },
];

export const ShopDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Вытаскиваем ID из адресной строки (например, "2" из /shop/2)

  // Ищем магазин в нашем списке по ID. Если не нашли, показываем первый по умолчанию
  const currentShop = shopsData.find((shop) => shop.id === id) || shopsData[0];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff', pb: 10 }}>
      {/* Шапка с кнопкой назад */}
      <Box sx={{ p: 2, pt: 3 }}>
        <IconButton 
          onClick={() => navigate(-1)}
          sx={{ bgcolor: '#dcefff', color: '#0077a5', '&:hover': { bgcolor: '#c5e4ff' } }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      {/* Информация о магазине */}
      <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box sx={{ flex: 1, pr: 2 }}>
          {/* Динамическое название магазина */}
          <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 2, fontSize: '1.2rem', color: '#1a1a1a' }}>
            {currentShop.name}
          </Typography>
          
          <Stack spacing={1.5}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>🇰🇬 Спорт жана велосипед дүкөнү</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>🚲 Жаңы жана тебилген велосипедтер</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>♻️ Ыңгайлуу баалар</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>🔧 Вело оңдоо</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>🚚 Жеткирүү</Typography>
          </Stack>
        </Box>
        
        {/* Динамический Логотип */}
        <Box 
          component="img" 
          src={currentShop.logo} 
          alt={currentShop.name}
          sx={{ width: 80, height: 80, borderRadius: '12px', border: '1px solid #0077a5', objectFit: 'contain' }} 
        />
      </Box>

      {/* Блок "Актуальные" */}
      <Box sx={{ px: 2, mb: 3 }}>
        <Box sx={{ border: '1px solid #0077a5', borderRadius: '12px', p: 1, mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>Актуальные</Typography>
        </Box>
        
        <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
          В продаже новый фикс LOW II
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.4, mb: 2 }}>
          Рама алюминий, вилка карбон<br/>
          Размер 53<br/>
          Вилсет: втулки weapon, обода Mavic Система, руль, вынос, подседел Urchin Track
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 3 }}>
          Цена: 30 000 сом
        </Typography>

        {/* Сетка фотографий через CSS Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
          <Box 
            component="img" 
            src="src/data/shop/image 28.png" 
            sx={{ gridColumn: 'span 2', width: '100%', borderRadius: '12px', objectFit: 'cover', height: 200 }} 
          />
          <Box 
            component="img" 
            src="https://placehold.co/300x300/e2e8f0/8b9eb0?text=Photo+2" 
            sx={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: 140 }} 
          />
          <Box 
            component="img" 
            src="https://placehold.co/300x300/e2e8f0/8b9eb0?text=Photo+3" 
            sx={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: 140 }} 
          />
        </Box>
      </Box>

      {/* Нижняя фиксированная панель (Звонок / Сообщение) */}
      <Box 
        sx={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          bgcolor: 'white', 
          p: 2, 
          borderTop: '1px solid #eee',
          display: 'flex',
          gap: 2,
          zIndex: 10
        }}
      >
        <IconButton sx={{ bgcolor: '#dcefff', color: '#0077a5', borderRadius: '12px', width: 48, height: 48 }}>
          <PhoneOutlinedIcon />
        </IconButton>
        <Button 
          variant="contained" 
          disableElevation
          sx={{ flex: 1, bgcolor: '#0077a5', color: 'white', borderRadius: '12px', textTransform: 'none', fontWeight: 600, fontSize: '1rem' }}
        >
          Написать сообщение
        </Button>
      </Box>
    </Box>
  );
};