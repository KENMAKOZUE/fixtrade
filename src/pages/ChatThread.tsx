import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar, Paper, TextField, IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { PageHeader } from '../components/PageHeader';

type ThreadMessage = { id: string; text: string; sender: 'me' | 'other'; time: string };
type Thread = { name: string; messages: ThreadMessage[] };

const threads: Record<'1' | '2', Thread> = {
  '1': {
    name: 'Александр',
    messages: [
      { id: 'm1', text: 'Здравствуйте! Велосипед еще актуален? Заинтересован объявлением.', sender: 'other', time: '14:20' },
      { id: 'm2', text: 'Приветствую! Да, продаю. Состояние отличное, цена и кассета новые, после ТО прошел около 50 км.', sender: 'me', time: '14:45' },
      { id: 'm3', text: 'Супер. А где можно посмотреть?', sender: 'other', time: '15:10' },
      { id: 'm4', text: 'В 10 мкр рядом с Бублика, вечером после 18:00', sender: 'me', time: '15:15' },
    ],
  },
  '2': {
    name: 'Мария',
    messages: [
      { id: 'm1', text: 'Можно небольшую скидку? 30000с устроит? Сама приеду.', sender: 'other', time: '14:30' },
      { id: 'm2', text: 'Согласен, давайте за 30000с. Когда вам удобно?', sender: 'me', time: '14:50' },
    ],
  },
};

export const ChatThread: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [messageText, setMessageText] = useState('');
  const conversation = id ? threads[id as keyof typeof threads] : undefined;

  if (!conversation) {
    return (
      <Box sx={{ pt: 4, px: 2 }}>
        <Typography>Переписка не найдена</Typography>
      </Box>
    );
  }

  const handleSend = () => {
    if (messageText.trim()) {
      setMessageText('');
    }
  };

  return (
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <PageHeader title={conversation.name} />
      
      <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: 'white', borderRadius: 3, mx: 2, mt: 1 }}>
        <Avatar>{conversation.name[0]}</Avatar>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {conversation.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            В сети
          </Typography>
        </Box>
      </Paper>

      <Box sx={{ flex: 1, px: 2, pt: 2, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {conversation.messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'me' ? 'flex-end' : 'flex-start',
            }}
          >
            <Box
              sx={{
                maxWidth: '75%',
                bgcolor: message.sender === 'me' ? '#0077a5' : '#ffffff',
                color: message.sender === 'me' ? 'white' : '#000000',
                p: '12px 16px',
                borderRadius: '20px',
                borderTopLeftRadius: message.sender === 'me' ? '20px' : '4px',
                borderTopRightRadius: message.sender === 'me' ? '4px' : '20px',
                boxShadow: message.sender === 'me' ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.08)',
                wordBreak: 'break-word',
              }}
            >
              <Typography variant="body2" sx={{ mb: 0.5, lineHeight: 1.4 }}>
                {message.text}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                {message.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          bgcolor: 'white',
          borderRadius: 0,
          display: 'flex',
          gap: 1,
          alignItems: 'center',
          zIndex: 100,
        }}
      >
        <TextField
          fullWidth
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
          placeholder="Сообщение..."
          size="small"
          sx={{
            bgcolor: '#f0f4f9',
            borderRadius: '24px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '24px',
            },
          }}
        />
        <IconButton
          onClick={handleSend}
          sx={{
            bgcolor: '#0077a5',
            color: 'white',
            borderRadius: '50%',
            width: 40,
            height: 40,
            '&:hover': {
              bgcolor: '#005a7f',
            },
          }}
        >
          <SendIcon fontSize="small" />
        </IconButton>
      </Paper>
    </Box>
  );
};
