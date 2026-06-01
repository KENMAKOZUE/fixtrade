import React from 'react';
import { Box, Typography, Paper, Chip, Button, List, ListItemButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { PageHeader } from '../components/PageHeader';

const deals = [
  { id: '1', title: 'Шоссейный велосипед', price: 120000, state: 'Ожидает получение в ПВЗ' },
  { id: '2', title: 'Шоссейный велосипед', price: 120000, state: 'В пути к покупателю' },
];

export const SafeDeals: React.FC = () => {
  return (
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc' }}>
      <PageHeader title="Безопасные сделки" />
      <Box sx={{ px: 1.5, pt: 3 }}>
        <Paper sx={{ p: 2, mb: 3, bgcolor: '#e5f4ff', borderRadius: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
            Защита покупателя и продавца
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Оплата резервируется на специальном счете до успешного завершения сделки.
          </Typography>
        </Paper>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip label="Активные (2)" color="primary" />
          <Chip label="Проданные (48)" variant="outlined" />
        </Box>
        <List>
          {deals.map((deal) => (
            <Paper key={deal.id} sx={{ p: 2, mb: 2, bgcolor: 'white' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {deal.title}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                {deal.price.toLocaleString('ru-RU')} с
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {deal.state}
              </Typography>
              <Button variant="contained" fullWidth>
                {deal.id === '1' ? 'Подтвердить получение' : 'Отследить посылку'}
              </Button>
            </Paper>
          ))}
        </List>
      </Box>
    </Box>
  );
};
