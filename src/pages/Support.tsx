import React from 'react';
import { Box, Typography, Paper, List, ListItemButton, ListItemText, Chip } from '@mui/material';

const topics = ['Покупки', 'Продажи', 'Безопасность', 'Доставка'];
const faqs = [
  'Как работает безопасная сделка?',
  'Как вернуть товар, если он не подошел?',
  'Какая комиссия сервиса при продаже?',
  'Что делать, если продавец не отвечает?',
];

export const Support: React.FC = () => {
  return (
    <Box sx={{ pt: 2, pb: 12 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Поддержка
      </Typography>
      <Paper sx={{ p: 2, mb: 3, bgcolor: 'white' }}>
        <Typography variant="body2" color="text.secondary">
          Чем мы можем помочь?
        </Typography>
      </Paper>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        {topics.map((text) => (
          <Paper key={text} sx={{ p: 2, bgcolor: 'white', flex: '1 1 calc(50% - 8px)', minWidth: 140 }}>
            <Typography>{text}</Typography>
          </Paper>
        ))}
      </Box>
      <Paper sx={{ p: 2, bgcolor: 'white' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
          Популярные вопросы
        </Typography>
        <List>
          {faqs.map((faq) => (
            <ListItemButton key={faq} divider>
              <ListItemText primary={faq} />
            </ListItemButton>
          ))}
        </List>
      </Paper>
      <Box sx={{ mt: 3, p: 2, bgcolor: 'white', borderRadius: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
          Не нашли ответ?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Наша команда поддержки всегда на связи и готова помочь вам с любым вопросом.
        </Typography>
        <Chip label="Написать в чат" color="primary" clickable />
      </Box>
    </Box>
  );
};
