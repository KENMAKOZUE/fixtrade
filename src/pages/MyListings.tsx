import React from 'react';
import { Box, Typography, Paper, Button, Chip, Grid } from '@mui/material';
import { PageHeader } from '../components/PageHeader';

const listings = [
  { id: '1', title: 'Шоссейный велосипед', price: 120000, status: 'Активно', days: 14 },
  { id: '2', title: 'Шлем для велосипеда', price: 5000, status: 'Активно', days: 14 },
];

export const MyListings: React.FC = () => {
  return (
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc' }}>
      <PageHeader title="Мои объявления" />
      <Box sx={{ px: 2, pt: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip label="Активные (2)" color="primary" />
          <Chip label="Проданные (48)" variant="outlined" />
        </Box>
        <Box sx={{ display: 'grid', gap: 2 }}>
          {listings.map((item) => (
            <Paper key={item.id} sx={{ p: 2, bgcolor: 'white' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ width: 88, height: 70, bgcolor: '#f1f5f9', borderRadius: 2 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.price.toLocaleString('ru-RU')} с</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                <Chip label={item.status} color="primary" size="small" />
                <Typography variant="caption" color="text.secondary">Осталось {item.days} дней</Typography>
                <Button variant="outlined" size="small">Изменить</Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
