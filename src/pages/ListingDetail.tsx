import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton, Chip, Stack, Card, CardMedia } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { mockListings } from '../data/mockListings';

export const ListingDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Состояние, чтобы открывать/скрывать характеристики по клику на кнопку
  const [showDetails, setShowDetails] = useState(false); 

  // Ищем текущее объявление
  const listing = mockListings.find((item) => item.id === id);

  if (!listing) {
    return (
      <Box sx={{ pt: 4, px: 2 }}>
        <Typography variant="h6" align="center">Объявление не найдено</Typography>
        <Button fullWidth onClick={() => navigate('/catalog')} sx={{ mt: 2 }}>Вернуться в каталог</Button>
      </Box>
    );
  }

  // Пустые (моковые) характеристики, как ты и просил.
  // Часть данных берем из моков (категория, состояние), остальное - заглушки
  const characteristics = [
    { label: 'Бренд', value: 'Уточняется' },
    { label: 'Модель', value: 'Уточняется' },
    { label: 'Тип велосипеда', value: listing.category },
    { label: 'Состояние', value: listing.condition === 'Б/У' ? 'Отличное б/у' : 'Новый' },
    { label: 'Год выпуска', value: '2021' },
    { label: 'Материал рамы', value: 'Алюминий' },
    { label: 'Вилка', value: 'Карбоновая' },
  ];

  // Берем другие объявления для блока "Вас может заинтересовать" (исключая текущее)
  const recommendations = mockListings.filter(item => item.id !== id).slice(0, 4);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff', pb: 12 }}>
      
      {/* Главная картинка с плавающей кнопкой "Назад" */}
      <Box sx={{ position: 'relative', height: 320, bgcolor: '#ffffff' }}>
        <Box
          component="img"
          // Берем первую картинку из моков
          src={listing.images?.[0] || 'https://placehold.co/600x400/ffffff/8b9eb0?text=Bike'}
          alt={listing.title}
          sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 2 }}
        />
        <IconButton
          onClick={() => navigate('/catalog')}
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
      </Box>

      {/* Контентная часть (наезжает на картинку за счет отрицательного margin) */}
      <Box 
        sx={{ 
          bgcolor: '#f4f7fb', // Легкий фон, как на макете
          borderRadius: '24px 24px 0 0', 
          mt: -3, 
          position: 'relative', 
          px: 2, 
          pt: 3,
          minHeight: '50vh'
        }}
      >
        {/* Цена и Заголовок */}
        <Typography variant="h5" sx={{ fontWeight: 800, color: '#0077a5', mb: 0.5 }}>
          {listing.price.toLocaleString('ru-RU')} сом
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 2, lineHeight: 1.2 }}>
          {listing.title}
        </Typography>

        {/* Теги */}
        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          <Chip label={listing.category} sx={{ bgcolor: '#e3f1ff', color: '#0077a5', fontWeight: 600, borderRadius: '8px', border: 'none' }} />
          <Chip label={listing.condition} sx={{ bgcolor: '#e3f1ff', color: '#0077a5', fontWeight: 600, borderRadius: '8px', border: 'none' }} />
        </Stack>

        {/* Превью описания */}
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: '#1a1a1a' }}>
          Продаю {listing.title}...
        </Typography>

        {/* Кнопка "Все детали" */}
        <Button
          variant="contained"
          fullWidth
          disableElevation
          onClick={() => setShowDetails(!showDetails)}
          sx={{ 
            bgcolor: '#0077a5', 
            color: 'white', 
            borderRadius: '12px', 
            py: 1.5, 
            fontWeight: 700, 
            mb: 4, 
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': { bgcolor: '#005f85' }
          }}
        >
          {showDetails ? '^ Скрыть детали' : '> Все детали объявления'}
        </Button>

        {/* Список характеристик (показывается только если нажали на кнопку) */}
        {showDetails && (
          <Box sx={{ mb: 4, bgcolor: 'white', p: 2, borderRadius: '16px' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#1a1a1a' }}>
              Характеристики
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#0077a5', fontWeight: 800, mb: 1 }}>
              Основное
            </Typography>
            {characteristics.map((char, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: '1px solid #f0f5fa' }}>
                <Typography variant="body2" sx={{ color: '#0077a5', fontWeight: 600 }}>
                  {char.label}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 800, color: '#1a1a1a' }}>
                  {char.value}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Блок "Вас может заинтересовать" */}
        <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 2, color: '#1a1a1a' }}>
          Вас может заинтересовать
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 1.5, 
            overflowX: 'auto', 
            pb: 2, 
            mx: -2, // Компенсируем padding родителя, чтобы скролл уходил за край экрана
            px: 2, 
            '&::-webkit-scrollbar': { display: 'none' } 
          }}
        >
          {recommendations.map((item) => (
            <Card
              key={item.id}
              elevation={0}
              onClick={() => {
                navigate(`/listing/${item.id}`);
                window.scrollTo(0, 0); // Прокручиваем наверх при переходе
              }}
              sx={{ minWidth: 130, width: 130, borderRadius: '16px', cursor: 'pointer', bgcolor: 'transparent' }}
            >
              <CardMedia
                component="img"
                height="130"
                image={item.images?.[0] || 'https://placehold.co/140x120/ffffff/8b9eb0?text=Photo'}
                sx={{ borderRadius: '16px', objectFit: 'cover', bgcolor: 'white' }}
              />
              <Box sx={{ pt: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0077a5', fontSize: '0.9rem' }}>
                  {item.price.toLocaleString('ru-RU')} сом
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1a1a1a', lineHeight: 1.2, mt: 0.5, fontSize: '0.8rem' }}>
                  {item.title}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Фиксированная нижняя панель (Звонок / Сообщение) */}
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
        <IconButton sx={{ bgcolor: '#eef6ff', color: '#0077a5', borderRadius: '12px', width: 48, height: 48 }}>
          <PhoneOutlinedIcon />
        </IconButton>
        <Button 
          variant="contained" 
          disableElevation 
          sx={{ 
            flex: 1, 
            bgcolor: '#0077a5', 
            color: 'white', 
            borderRadius: '12px', 
            textTransform: 'none', 
            fontWeight: 700, 
            fontSize: '1rem',
            '&:hover': { bgcolor: '#005f85' }
          }}
        >
          Написать сообщение
        </Button>
      </Box>
    </Box>
  );
};