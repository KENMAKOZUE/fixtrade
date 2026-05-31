import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Avatar, Paper, List, ListItemIcon, ListItemText, Divider, ListItemButton, Button } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';

export const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: 2, pb: 12 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Avatar sx={{ width: 64, height: 64 }}>Т</Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Тилек Б.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Надежный продавец
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        {[
          { value: '4.9', label: 'Рейтинг' },
          { value: '12', label: 'Активных' },
          { value: '48', label: 'Продано' },
        ].map((item) => (
          <Paper key={item.label} sx={{ p: 2, textAlign: 'center', flex: '1 1 30%' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.value}</Typography>
            <Typography variant="caption" color="text.secondary">{item.label}</Typography>
          </Paper>
        ))}
      </Box>

      <Box sx={{ mt: 3 }}>
        <List disablePadding>
          <ListItemButton onClick={() => navigate('/my-listings')}>
            <ListItemIcon><InventoryIcon /></ListItemIcon>
            <ListItemText primary="Мои объявления" secondary="Активные, проданные, черновики" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate('/chats')}>
            <ListItemIcon><ChatIcon /></ListItemIcon>
            <ListItemText primary="Сообщения" secondary="Чаты с покупателями" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate('/favorites')}>
            <ListItemIcon><FavoriteIcon /></ListItemIcon>
            <ListItemText primary="Избранное" secondary="Сохраненные товары" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate('/safe-deals')}>
            <ListItemIcon><SupportIcon /></ListItemIcon>
            <ListItemText primary="Безопасные сделки" secondary="Заказы с гарантией" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate('/settings')}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItemButton>
        </List>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => navigate('/support')}
            sx={{ borderColor: '#d9e7f7', color: 'text.primary', textTransform: 'none' }}
          >
            Поддержка
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
