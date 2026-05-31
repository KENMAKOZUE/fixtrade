import React from 'react';
import { Box, Card, CardContent, Typography, Divider } from '@mui/material';
import { Listing } from '../../types/listing';

interface ReviewStepProps {
  listing: Listing;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({ listing }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Проверьте информацию
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Typography color="textSecondary" gutterBottom>
              Категория
            </Typography>
            <Typography variant="body1">{listing.category}</Typography>
          </Box>
          <Divider />

          <Box sx={{ my: 2 }}>
            <Typography color="textSecondary" gutterBottom>
              Фото ({listing.photos.length})
            </Typography>
            {listing.photos.length > 0 && (
              <Typography variant="body2">Загруженные фото: {listing.photos.join(', ')}</Typography>
            )}
          </Box>
          <Divider />

          <Box sx={{ my: 2 }}>
            <Typography color="textSecondary" gutterBottom>
              Описание
            </Typography>
            <Typography variant="body1">{listing.description}</Typography>
          </Box>
          <Divider />

          <Box sx={{ my: 2 }}>
            <Typography color="textSecondary" gutterBottom>
              Характеристики
            </Typography>
            {Object.entries(listing.characteristics).map(([key, value]) => (
              <Typography key={key} variant="body2">
                {key}: {value}
              </Typography>
            ))}
          </Box>
          <Divider />

          <Box sx={{ mt: 2 }}>
            <Typography color="textSecondary" gutterBottom>
              Цена
            </Typography>
            <Typography variant="h6">{listing.price} ₽</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
