import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Avatar, IconButton, InputBase } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Правильный путь до твоего фото
import userIcon from '../data/icon.png';

type ThreadMessage = { id: string; text: string; sender: 'me' | 'other'; time: string };
type Thread = { 
  name: string; 
  productTitle: string; 
  productPrice: string; 
  productImage: string;
  avatar: string | null;
  messages: ThreadMessage[] 
};

const threads: Record<string, Thread> = {
  '2': {
    name: 'Алексей В.',
    productTitle: 'Шоссейный велосипед',
    productPrice: '125 000с',
    productImage: 'https://placehold.co/100x100/f4f7fb/8b9eb0?text=Bike',
    avatar: userIcon, // Используем твое фото
    messages: [
      { id: 'm1', text: 'Здраствуйте! Велосипед еще актуален? Заинтересовало объявление.', sender: 'me', time: '14:20' },
      { id: 'm2', text: 'Приветствую! Да, продаю. Состояние отличное, цепь и кассета новые, после ТО проехал около 50 км.', sender: 'other', time: '14:45' },
      { id: 'm3', text: 'Супер. А где можно посмотреть?', sender: 'me', time: '15:10' },
      { id: 'm4', text: 'В 10 мкр рядом с Бублика, вечером после 18:00', sender: 'other', time: '15:15' },
    ],
  },
};

export const ChatThread: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [messageText, setMessageText] = useState('');
  
  const conversation = id && threads[id] ? threads[id] : threads['2'];

  const handleSend = () => {
    if (messageText.trim()) {
      setMessageText('');
    }
  };

  return (
    // ИСПРАВЛЕНО: Высота экрана минус высота отступа твоего MainLayout (80px)
    <Box sx={{ height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', bgcolor: '#f4f7fb' }}>
      
      {/* Шапка чата */}
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, pt: 3, bgcolor: 'white' }}>
        <IconButton 
          onClick={() => navigate(-1)}
          sx={{ bgcolor: '#dcefff', color: '#0077a5', mr: 2, '&:hover': { bgcolor: '#c5e4ff' } }}
        >
          <ArrowBackIcon />
        </IconButton>
        
        {/* Логика аватарки */}
        {conversation.avatar ? (
          <Avatar src={conversation.avatar} sx={{ width: 44, height: 44, mr: 1.5 }} />
        ) : (
          <AccountCircleIcon sx={{ fontSize: 44, color: '#1a1a1a', mr: 1.5 }} />
        )}

        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2, color: '#1a1a1a' }}>
            {conversation.name}
          </Typography>
          <Typography variant="caption" sx={{ color: '#0077a5', fontWeight: 600 }}>
            В сети
          </Typography>
        </Box>
      </Box>

      {/* Баннер товара */}
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1.5, bgcolor: 'white', borderTop: '1px solid #f0f5fa', borderBottom: '1px solid #f0f5fa' }}>
        <Box 
          component="img" 
          src={conversation.productImage} 
          alt="Товар" 
          sx={{ width: 48, height: 48, borderRadius: '8px', objectFit: 'cover', mr: 1.5 }} 
        />
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2 }}>
            {conversation.productTitle}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#0077a5', fontWeight: 800 }}>
            {conversation.productPrice}
          </Typography>
        </Box>
      </Box>

      {/* Зона сообщений (flex: 1 заставляет её занять всё свободное место) */}
      <Box sx={{ flex: 1, px: 2, py: 3, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {conversation.messages.map((message) => {
          const isMe = message.sender === 'me';
          return (
            <Box
              key={message.id}
              sx={{
                display: 'flex',
                justifyContent: isMe ? 'flex-end' : 'flex-start',
              }}
            >
              <Box
                sx={{
                  maxWidth: '80%',
                  bgcolor: isMe ? '#0077a5' : '#ffffff',
                  color: isMe ? 'white' : '#1a1a1a',
                  p: '12px 16px',
                  borderRadius: '16px',
                  borderTopRightRadius: isMe ? '4px' : '16px',
                  borderTopLeftRadius: !isMe ? '4px' : '16px',
                  border: isMe ? 'none' : '1px solid #e0e6ed',
                  position: 'relative',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.4, mb: 2 }}>
                  {message.text}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    position: 'absolute', 
                    bottom: 6, 
                    right: 12, 
                    fontWeight: 700,
                    fontSize: '0.65rem',
                    color: isMe ? 'rgba(255,255,255,0.7)' : '#8b9eb0' 
                  }}
                >
                  {message.time}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* ИСПРАВЛЕНО: Поле ввода без position fixed. Оно само прижмется к низу */}
      <Box sx={{ p: 2, bgcolor: 'white', borderTop: '1px solid #f0f5fa', display: 'flex', gap: 1.5, alignItems: 'center' }}>
        <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: '#dcefff', flexShrink: 0 }} />
        <InputBase
          fullWidth
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Сообщение..."
          sx={{
            bgcolor: '#dcefff',
            borderRadius: '24px',
            px: 2.5,
            py: 1,
            fontSize: '0.95rem',
            fontWeight: 600,
            color: '#0077a5',
            '&::placeholder': { color: '#8b9eb0', opacity: 1 }
          }}
        />
        <IconButton
          onClick={handleSend}
          sx={{
            bgcolor: '#0077a5',
            color: 'white',
            borderRadius: '50%',
            width: 44,
            height: 44,
            flexShrink: 0,
            '&:hover': { bgcolor: '#005f85' },
          }}
        >
          <SendIcon fontSize="small" sx={{ ml: 0.5 }} />
        </IconButton>
      </Box>
    </Box>
  );
};