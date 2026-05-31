import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar, Paper, Button } from '@mui/material';
import { PageHeader } from '../components/PageHeader';

type ThreadMessage = { id: string; text: string; sender: 'me' | 'other' };
type Thread = { name: string; messages: ThreadMessage[] };

const threads: Record<'1' | '2', Thread> = {
  '1': {
    name: 'Александр',
    messages: [
      { id: 'm1', text: 'Здравствуйте, а шлем еще в наличии? Готов забрать сегодня.', sender: 'other' },
      { id: 'm2', text: 'Да, шлем в наличии. Могу подготовить до 18:00.', sender: 'me' },
      { id: 'm3', text: 'Отлично! Где встречаемся?', sender: 'other' },
      { id: 'm4', text: 'Можем встретиться у магазина на Чуйской.', sender: 'me' },
    ],
  },
  '2': {
    name: 'Мария',
    messages: [
      { id: 'm1', text: 'Можно небольшую скидку? 30000с устроит? Сама приеду.', sender: 'other' },
      { id: 'm2', text: 'Согласен, давайте за 30000с. Когда вам удобно?', sender: 'me' },
    ],
  },
};

export const ChatThread: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const conversation = id ? threads[id as keyof typeof threads] : undefined;

  if (!conversation) {
    return (
      <Box sx={{ pt: 4, px: 2 }}>
        <Typography>Переписка не найдена</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc' }}>
      <PageHeader title={conversation.name} />
      <Box sx={{ px: 2, pt: 2 }}>
        <Paper sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: 'white', borderRadius: 3 }}>
          <Avatar>{conversation.name[0]}</Avatar>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {conversation.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Онлайн
            </Typography>
          </Box>
        </Paper>

        <Box sx={{ display: 'grid', gap: 1 }}>
          {conversation.messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                alignSelf: message.sender === 'me' ? 'end' : 'start',
                maxWidth: '80%',
                bgcolor: message.sender === 'me' ? '#0077a5' : '#e8f3ff',
                color: message.sender === 'me' ? 'white' : 'text.primary',
                p: 2,
                borderRadius: 3,
                borderTopLeftRadius: message.sender === 'me' ? 12 : 2,
                borderTopRightRadius: message.sender === 'me' ? 2 : 12,
              }}
            >
              <Typography variant="body2">{message.text}</Typography>
            </Box>
          ))}
        </Box>

        <Paper sx={{ mt: 3, p: 2, display: 'flex', gap: 1, alignItems: 'center', bgcolor: 'white', borderRadius: 3 }}>
          <Box sx={{ flex: 1, border: '1px solid #e3edf8', borderRadius: 3, p: 1, color: 'text.secondary' }}>
            <Typography variant="body2">Написать сообщение...</Typography>
          </Box>
          <Button variant="contained" size="small">
            Отправить
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};
