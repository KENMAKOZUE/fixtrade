import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, List, ListItemAvatar, Avatar, ListItemText, Badge, ListItemButton } from '@mui/material';

const chats = [
  { id: '1', name: 'Александр', message: 'Здравствуйте, а шлем еще в наличии? Готов забрать сегодня.', time: 'Только что', unread: 1 },
  { id: '2', name: 'Мария', message: 'Можно небольшую скидку? 30000с устроит?', time: '10 мин назад', unread: 0 },
  { id: '3', name: 'Иван', message: 'Спасибо, все отлично работает!', time: '2 часа назад', unread: 0 },
  { id: '4', name: 'Евгений', message: 'Отправил через безопасную сделку, номер трека можете посмотреть...', time: 'Вчера', unread: 0 },
];

export const Chats: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: 2, pb: 12, px: 1.5 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Сообщения
      </Typography>
      <List>
        {chats.map((chat) => (
          <ListItemButton key={chat.id} divider onClick={() => navigate(`/chat/${chat.id}`)}>
            <ListItemAvatar>
              <Badge color="primary" badgeContent={chat.unread} invisible={chat.unread === 0}>
                <Avatar>{chat.name[0]}</Avatar>
              </Badge>
            </ListItemAvatar>
            <ListItemText
              primary={chat.name}
              secondary={chat.message}
            />
            <Typography variant="caption" color="text.secondary">
              {chat.time}
            </Typography>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};
