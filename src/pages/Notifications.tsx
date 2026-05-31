import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItemButton, ListItemAvatar, Avatar, ListItemText, Chip, Stack } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MessageIcon from '@mui/icons-material/Message';
import { PageHeader } from '../components/PageHeader';

const notifications = [
  { id: '1', type: 'deal', title: 'Безопасная сделка', subtitle: 'Покупатель оплатил товар “Аэродинамичный шлем Lazer V2”', time: 'Только что' },
  { id: '2', type: 'deal', title: 'Новое предложение', subtitle: 'Пользователь Михаил предложил 8000с за ваш товар.', time: '10 мин назад' },
  { id: '3', type: 'deal', title: 'Товар доставлен', subtitle: 'Покупатель успешно получил товар “Карбоновый руль”.', time: '2 часа назад' },
  { id: '4', type: 'message', title: 'Александр', subtitle: 'Здравствуйте, а шлем еще в наличии? Готов забрать сегодня.', time: 'Только что' },
  { id: '5', type: 'message', title: 'Мария', subtitle: 'Можно небольшую скидку? 30000с устроит? Сама приеду.', time: '10 мин назад' },
  { id: '6', type: 'message', title: 'Иван', subtitle: 'Спасибо, все отлично работает! Оставил вам хороший отзыв.', time: '2 часа назад' },
  { id: '7', type: 'message', title: 'Евгений', subtitle: 'Отправил через безопасную сделку, номер трека можете посмотреть в...', time: 'Вчера' },
];

const tabItems = [
  { value: 'all', label: 'Все' },
  { value: 'deals', label: 'Сделки' },
  { value: 'messages', label: 'Сообщения' },
];

export const Notifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'deals' | 'messages'>('messages');

  const filtered =
    activeTab === 'all'
      ? notifications
      : notifications.filter((item) => (activeTab === 'deals' ? item.type === 'deal' : item.type === 'message'));

  return (
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc' }}>
      <PageHeader title="Уведомления" />
      <Box sx={{ px: 2, pt: 3 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {tabItems.map((tab) => (
            <Chip
              key={tab.value}
              label={tab.label}
              clickable
              onClick={() => setActiveTab(tab.value as 'all' | 'deals' | 'messages')}
              color={activeTab === tab.value ? 'primary' : 'default'}
              sx={{ minWidth: 100 }}
            />
          ))}
        </Stack>

        <Paper sx={{ p: 0, bgcolor: 'white' }}>
          <List>
            {filtered.map((item) => (
              <ListItemButton key={item.id} divider sx={{ alignItems: 'flex-start' }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: item.type === 'deal' ? '#e7f2fb' : '#f3e8ff', color: item.type === 'deal' ? '#0077a5' : '#8e24aa' }}>
                    {item.type === 'deal' ? <LocalShippingIcon /> : <MessageIcon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.time}
                      </Typography>
                    </Box>
                  }
                  secondary={item.subtitle}
                />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};
