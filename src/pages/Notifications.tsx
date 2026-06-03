import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Иконки
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined'; // Иконка телефона с галочкой
import PersonIcon from '@mui/icons-material/Person'; // Иконка пользователя
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Иконка отзыва

// Обновленные моковые данные, точно как на макете
const notifications = [
  { 
    id: '1', 
    type: 'deal', 
    title: 'Безопасная сделка', 
    subtitle: 'Покупатель оплатил товар "Аэродинамичный шлем Lazer V2"', 
    time: 'Только что',
    iconType: 'deal'
  },
  { 
    id: '2', 
    type: 'message', 
    title: 'Дмитрий С.', 
    subtitle: 'Привет! Еще актуально? Готов забрать сегодня вечером', 
    time: '10 мин назад',
    iconType: 'user'
  },
  { 
    id: '3', 
    type: 'system', 
    title: 'Снижение цены', 
    subtitle: 'Товар из избранного "Карбоновый руль FSA" подешевел на 1500с', 
    time: '2 часа назад',
    iconType: 'empty'
  },
  { 
    id: '4', 
    type: 'system', 
    title: 'Новый отзыв', 
    subtitle: 'Товар из избранного "Карбоновый руль FSA" подешевел на 1500с', // Текст из макета
    time: 'Вчера',
    iconType: 'review'
  },
  { 
    id: '5', 
    type: 'system', 
    title: 'Добро пожаловать!', 
    subtitle: 'Вы успешно зарегистрировались в FixTrade. Заполните профиль, чтобы...', 
    time: '2 дн. назад',
    iconType: 'empty'
  },
];

const tabItems = [
  { value: 'all', label: 'Все' },
  { value: 'deals', label: 'Сделки' },
  { value: 'messages', label: 'Сообщения' },
];

export const Notifications: React.FC = () => {
  const navigate = useNavigate();
  // По макету активна вкладка "Все"
  const [activeTab, setActiveTab] = useState<'all' | 'deals' | 'messages'>('all');

  const filtered = activeTab === 'all'
      ? notifications
      : notifications.filter((item) => (activeTab === 'deals' ? item.type === 'deal' : item.type === 'message'));

  // Функция для отрисовки правильной аватарки
  const renderAvatar = (iconType: string) => {
    switch (iconType) {
      case 'deal':
        return (
          <Avatar sx={{ bgcolor: '#dcefff', color: '#1a1a1a', width: 56, height: 56 }}>
            <MobileFriendlyOutlinedIcon />
          </Avatar>
        );
      case 'user':
        return (
          <Avatar sx={{ bgcolor: '#e0e6ed', color: '#8b9eb0', width: 56, height: 56 }}>
            <PersonIcon fontSize="large" />
          </Avatar>
        );
      case 'review':
        return (
          <Avatar sx={{ bgcolor: '#dcefff', color: '#1a1a1a', width: 56, height: 56 }}>
            <StarBorderIcon />
          </Avatar>
        );
      case 'empty':
      default:
        return <Avatar sx={{ bgcolor: '#e0e6ed', width: 56, height: 56 }}> </Avatar>;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f7fb', pb: 12 }}>
      
      {/* Шапка */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          px: 2, 
          py: 2, 
          bgcolor: 'white', 
        }}
      >
        <IconButton 
          onClick={() => navigate(-1)}
          sx={{ 
            bgcolor: '#dcefff', 
            color: '#0077a5', 
            mr: 2, 
            width: 40,
            height: 40,
            '&:hover': { bgcolor: '#c5e4ff' } 
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '1.1rem' }}>
          Уведомления
        </Typography>
      </Box>

      {/* Вкладки (Все / Сделки / Сообщения) */}
      <Box sx={{ display: 'flex', gap: 1, px: 2, py: 2, bgcolor: 'white', borderBottom: '1px solid #f0f5fa' }}>
        {tabItems.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <Box 
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              sx={{ 
                bgcolor: isActive ? '#0077a5' : 'transparent', 
                color: isActive ? 'white' : '#8b9eb0', 
                border: isActive ? 'none' : '1px solid #e0e6ed',
                px: 2, 
                py: 0.8, 
                borderRadius: '8px', 
                fontWeight: 700, 
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </Box>
          );
        })}
      </Box>

      {/* Список уведомлений */}
      <Box sx={{ bgcolor: 'white' }}>
        {filtered.map((item) => (
          <Box 
            key={item.id} 
            sx={{ 
              display: 'flex', 
              gap: 2, 
              p: 2, 
              borderBottom: '1px solid #e0e6ed',
              cursor: 'pointer',
              '&:hover': { bgcolor: '#fcfdfe' }
            }}
          >
            {/* Аватарка */}
            {renderAvatar(item.iconType)}
            
            {/* Текст уведомления */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2 }}>
                  {item.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 700, whiteSpace: 'nowrap', ml: 1 }}>
                  {item.time}
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#8b9eb0', 
                  fontWeight: 600, 
                  lineHeight: 1.3,
                  // Обрезка текста до двух строк, если он слишком длинный
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
};