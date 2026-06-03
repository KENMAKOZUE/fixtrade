import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, Paper, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Та самая иконка, как на макете

// Правильный путь до твоего фото
import userIcon from '../data/icon.png';

const chatsData = [
  { 
    id: '1', 
    name: 'FixTrade Поддержка', 
    message: 'Ваш платеж успешно зарезерв...', 
    time: '10:42', 
    unread: 2, 
    active: false, // Убрали голубое выделение
    productImage: null,
    avatar: null // Оставляем null, чтобы показалась иконка AccountCircle
  },
  { 
    id: '2', 
    name: 'Алексей В.', 
    message: 'Договорились, буду се...', 
    time: 'Вчера', 
    unread: 2, 
    active: false, 
    productImage: 'https://placehold.co/100x100/f4f7fb/8b9eb0?text=Bike',
    avatar: userIcon // Используем твое фото
  },
];

export const Chats: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredChats = chatsData.filter(chat => 
    chat.name.toLowerCase().includes(search.toLowerCase()) || 
    chat.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff', pb: 12 }}>
      
      {/* Блок поиска */}
      <Box sx={{ px: 2, pt: 2, mb: 2 }}>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 2,
            bgcolor: '#f0f5fa',
            borderRadius: '16px',
          }}
        >
          <SearchIcon sx={{ color: '#8b9eb0', mr: 1 }} />
          <InputBase
            placeholder="Поиск по сообщениям..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1, fontSize: '0.95rem', color: '#1a1a1a', py: 1.5, fontWeight: 600 }}
          />
        </Paper>
      </Box>

      {/* Список чатов */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {filteredChats.map((chat) => (
          <Box
            key={chat.id}
            onClick={() => navigate(`/chat/${chat.id}`)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2,
              bgcolor: chat.active ? '#dcefff' : 'transparent',
              cursor: 'pointer',
              borderBottom: chat.active ? 'none' : '1px solid #f0f5fa', 
            }}
          >
            {/* Точная логика аватарки */}
            {chat.avatar ? (
              <Avatar src={chat.avatar} sx={{ width: 56, height: 56 }} />
            ) : (
              <AccountCircleIcon sx={{ fontSize: 56, color: '#1a1a1a' }} />
            )}

            {/* Текстовый блок */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '1.05rem' }}>
                  {chat.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 600 }}>
                  {chat.time}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#1a1a1a', 
                    fontWeight: 600, 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    pr: 1 
                  }}
                >
                  {chat.message}
                </Typography>
                
                {chat.unread > 0 && (
                  <Box 
                    sx={{ 
                      minWidth: 22, 
                      height: 22, 
                      borderRadius: '11px', 
                      bgcolor: '#0077a5', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '0.75rem', 
                      fontWeight: 800, 
                      px: 0.5 
                    }}
                  >
                    {chat.unread}
                  </Box>
                )}
              </Box>
            </Box>

            {/* Картинка товара */}
            {chat.productImage && (
              <Box
                component="img"
                src={chat.productImage}
                alt="Товар"
                sx={{ width: 48, height: 48, borderRadius: '8px', objectFit: 'cover', ml: 1 }}
              />
            )}
          </Box>
        ))}
      </Box>

    </Box>
  );
};