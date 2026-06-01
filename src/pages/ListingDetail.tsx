import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { mockListings } from '../data/mockListings';

export const ListingDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = mockListings.find((item) => item.id === id);

  if (!listing) {
    return (
      <Box sx={{ pt: 4 }}>
        <Typography>Объявление не найдено</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ pt: 2, pb: 12, px: 1.5 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
        Назад
      </Button>
      <Typography variant="h5" sx={{ fontWeight: 700, mt: 2, mb: 1 }}>
        {listing.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {listing.subtitle}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
        {listing.price.toLocaleString('ru-RU')} сом
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {listing.images.slice(0, 4).map((image, index) => (
          <Card key={index} sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 140 }}>
            <Box sx={{ width: '100%', height: 160, bgcolor: '#d9d9d9' }} />
          </Card>
        ))}
      </Box>

      <Card sx={{ mt: 3, p: 2, bgcolor: 'white' }}>
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Описание
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Хорошее состояние, аккуратная эксплуатация. Все детали проверены и подготовлены к продаже.
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', gap: 1, mt: 3, flexWrap: 'wrap' }}>
        <Button variant="contained" fullWidth sx={{ flex: 1 }}>
          Написать сообщение
        </Button>
        <Button variant="outlined" fullWidth sx={{ flex: 1 }}>
          Позвонить
        </Button>
      </Box>
    </Box>
  );
};
