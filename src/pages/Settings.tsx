import React from 'react';
import { Box, Typography, Paper, List, ListItemButton, ListItemText, Chip, Button } from '@mui/material';
import { PageHeader } from '../components/PageHeader';

const sections = [
  { title: 'Личные данные', subtitle: '' },
  { title: 'Способ оплаты', subtitle: '2 карты' },
  { title: 'Адреса доставки', subtitle: '' },
  { title: 'Смена пароля', subtitle: '' },
  { title: 'Двухфакторная защита', subtitle: 'Вкл' },
  { title: 'Активные сеансы', subtitle: '' },
  { title: 'Push-уведомления', subtitle: '' },
  { title: 'Оформление', subtitle: 'Светлая' },
  { title: 'Очистить кэш', subtitle: '124 мб' },
  { title: 'Помощь и FAQ', subtitle: '' },
  { title: 'Правовая информация', subtitle: '' },
];

export const Settings: React.FC = () => {
  return (
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc' }}>
      <PageHeader title="Настройки" />
      <Box sx={{ px: 2, pt: 3 }}>
        <Paper sx={{ p: 2, mb: 2, bgcolor: 'white', borderRadius: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Аккаунт
          </Typography>
          <List disablePadding>
            {sections.slice(0, 3).map((item) => (
              <ListItemButton key={item.title} divider>
                <ListItemText primary={item.title} secondary={item.subtitle || undefined} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
        <Paper sx={{ p: 2, mb: 2, bgcolor: 'white', borderRadius: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Безопасность
          </Typography>
          <List disablePadding>
            {sections.slice(3, 6).map((item) => (
              <ListItemButton key={item.title} divider>
                <ListItemText primary={item.title} secondary={item.subtitle || undefined} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
        <Paper sx={{ p: 2, mb: 2, bgcolor: 'white', borderRadius: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Приложение
          </Typography>
          <List disablePadding>
            {sections.slice(6, 9).map((item) => (
              <ListItemButton key={item.title} divider>
                <ListItemText primary={item.title} secondary={item.subtitle || undefined} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
        <Paper sx={{ p: 2, bgcolor: 'white', borderRadius: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Поддержка
          </Typography>
          <List disablePadding>
            {sections.slice(9).map((item) => (
              <ListItemButton key={item.title} divider>
                <ListItemText primary={item.title} secondary={item.subtitle || undefined} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
        <Box sx={{ mt: 3 }}>
          <Button variant="outlined" fullWidth>
            Выйти из аккаунта
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
