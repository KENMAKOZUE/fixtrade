import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Avatar, IconButton, Divider, ListItemButton, Chip } from '@mui/material';

// Иконки
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Правильный путь до твоего фото (иконки пользователя)
import userIcon from '../data/icon.png';

// Данные профиля (заглушки)
const profileData = {
  name: 'Имя Пользователя', // Заглушка вместо "Тилек Б."
  isTrusted: true,
  registeredSince: '2026',
  rating: '4.9',
  reviewsCount: '34',
  activeListings: '12',
  soldListings: '48',
  avatarUrl: userIcon, // Используем локальную картинку, как в чатах
};

// Список меню
const menuItems = [
  { id: 'listings', title: 'Мои объявления', subtitle: 'Активные, проданные, черновики', icon: <Inventory2OutlinedIcon />, path: '/my-listings' },
  { id: 'chats', title: 'Сообщение', subtitle: 'Чаты с продавцами и покупателями', icon: <ChatBubbleOutlineOutlinedIcon />, path: '/chats' },
  { id: 'favorites', title: 'Избранное', subtitle: 'Сохраненные велосипеды и детали', icon: <FavoriteBorderOutlinedIcon />, path: '/favorites' },
  { id: 'deals', title: 'Безопасные сделки', subtitle: 'Заказы с доставкой и гарантией', icon: <VerifiedUserOutlinedIcon />, path: '/safe-deals' },
];

const bottomMenuItems = [
  { id: 'settings', title: 'Настройки', icon: <SettingsOutlinedIcon />, path: '/settings' },
  { id: 'support', title: 'Помощь и поддержка', icon: <HelpOutlineOutlinedIcon />, path: '/support' },
];

export const Profile: React.FC = () => {
  const navigate = useNavigate();

  // Вспомогательный компонент для рендера строк меню
  const renderMenuItem = (item: any, isLast: boolean) => (
    <Box key={item.id}>
      <ListItemButton 
        onClick={() => navigate(item.path)}
        sx={{ py: 2, px: 2, display: 'flex', alignItems: 'center', gap: 2 }}
      >
        {/* Иконка в голубом квадрате */}
        <Box sx={{ width: 44, height: 44, borderRadius: '12px', bgcolor: '#dcefff', color: '#0077a5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {item.icon}
        </Box>
        
        {/* Текст */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2, mb: item.subtitle ? 0.5 : 0 }}>
            {item.title}
          </Typography>
          {item.subtitle && (
            <Typography variant="body2" sx={{ color: '#8b9eb0', fontWeight: 600, fontSize: '0.8rem' }}>
              {item.subtitle}
            </Typography>
          )}
        </Box>
        
        {/* Стрелочка вправо */}
        <ChevronRightIcon sx={{ color: '#8b9eb0' }} />
      </ListItemButton>
      {!isLast && <Divider sx={{ mx: 2, borderColor: '#f0f5fa' }} />}
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff', pb: 12 }}>
      
      {/* Шапка (Заголовок и Колокольчик) */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pt: 2, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, color: '#1a1a1a' }}>
          Профиль
        </Typography>
        {/* ИСПРАВЛЕНО: Добавлен onClick для перехода на уведомления */}
        <IconButton sx={{ color: '#1a1a1a' }} onClick={() => navigate('/notifications')}>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
      </Box>

      {/* Информация о пользователе (ТЕПЕРЬ КЛИКАБЕЛЬНАЯ ДЛЯ ПЕРЕХОДА В РЕДАКТИРОВАНИЕ) */}
      <Box 
        onClick={() => navigate('/profile_edit')} 
        sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, mb: 4, cursor: 'pointer' }}
      >
        <Avatar src={profileData.avatarUrl} sx={{ width: 80, height: 80, bgcolor: '#1a1a1a' }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 0.5, lineHeight: 1.2 }}>
            {profileData.name}
          </Typography>
          
          {profileData.isTrusted && (
            <Chip 
              icon={<CheckCircleOutlineOutlinedIcon fontSize="small" sx={{ color: '#0077a5' }} />} 
              label="Надежный продавец" 
              size="small"
              sx={{ bgcolor: '#dcefff', color: '#0077a5', fontWeight: 800, borderRadius: '8px', border: 'none', mb: 0.5, height: 24, '& .MuiChip-label': { px: 1 } }} 
            />
          )}
          
          <Typography variant="body2" sx={{ color: '#8b9eb0', fontWeight: 600, fontSize: '0.8rem' }}>
            На FixTrade с {profileData.registeredSince} года
          </Typography>
        </Box>
      </Box>

      {/* Блок статистики (Рейтинг, Активные, Продано) */}
      <Box sx={{ display: 'flex', gap: 1.5, px: 2, mb: 4 }}>
        {/* Карточка Рейтинга */}
        <Box sx={{ flex: 1, bgcolor: '#dcefff', borderRadius: '16px', p: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#0077a5', mb: 0.5 }}>
            <StarBorderIcon fontSize="small" />
            <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1 }}>
              {profileData.rating}
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 600 }}>
            {profileData.reviewsCount} отзыва
          </Typography>
        </Box>
        
        {/* Карточка Активных */}
        <Box sx={{ flex: 1, bgcolor: '#dcefff', borderRadius: '16px', p: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#0077a5', mb: 0.5, lineHeight: 1 }}>
            {profileData.activeListings}
          </Typography>
          <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 600 }}>
            Активных
          </Typography>
        </Box>
        
        {/* Карточка Продано */}
        <Box sx={{ flex: 1, bgcolor: '#dcefff', borderRadius: '16px', p: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#0077a5', mb: 0.5, lineHeight: 1 }}>
            {profileData.soldListings}
          </Typography>
          <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 600 }}>
            Продано
          </Typography>
        </Box>
      </Box>

      {/* Основное меню (Мои объявления, Сообщения, Избранное, Сделки) */}
      <Box sx={{ borderTop: '1px solid #f0f5fa', borderBottom: '1px solid #f0f5fa', mb: 1 }}>
        {menuItems.map((item, index) => renderMenuItem(item, index === menuItems.length - 1))}
      </Box>

      {/* Нижнее меню (Настройки, Поддержка) */}
      <Box>
        {bottomMenuItems.map((item, index) => renderMenuItem(item, index === bottomMenuItems.length - 1))}
      </Box>

    </Box>
  );
};