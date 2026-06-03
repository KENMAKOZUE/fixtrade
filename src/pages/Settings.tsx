import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppTheme } from '../context/ThemeContext';

const settingsSections = [
  {
    header: 'АККАУНТ',
    items: [
      { title: 'Личные данные', value: '' },
      { title: 'Способ оплаты', value: '2 карты' },
      { title: 'Адреса доставки', value: '' },
    ]
  },
  {
    header: 'БЕЗОПАСНОСТЬ',
    items: [
      { title: 'Смена пароля', value: '' },
      { title: 'Двухфакторная защита', value: 'Вкл' },
      { title: 'Активные сеансы', value: '' },
    ]
  },
  {
    header: 'ПРИЛОЖЕНИЕ',
    items: [
      { title: 'Push-уведомления', value: '' },
      { title: 'Оформление', value: 'Светлая' },
      { title: 'Очистить кэш', value: '124 мб' },
    ]
  },
  {
    header: 'ПОДДЕРЖКА',
    items: [
      { title: 'Помощь и FAQ', value: '' },
      { title: 'Правовая информация', value: '' },
    ]
  }
];

export const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useAppTheme();

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
          borderBottom: '1px solid #f0f5fa' 
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
          Настройки
        </Typography>
      </Box>

      {/* Списки настроек */}
      <Box sx={{ px: 2, pt: 2 }}>
        {settingsSections.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ mb: 3 }}>
            
            {/* Заголовок секции */}
            <Typography 
              variant="caption" 
              sx={{ 
                fontWeight: 700, 
                color: '#8b9eb0', 
                mb: 1, 
                display: 'block',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              {section.header}
            </Typography>

            {/* Белый блок с пунктами */}
            <Box 
              sx={{ 
                bgcolor: 'white', 
                borderRadius: '16px', 
                border: '1px solid #e0e6ed',
                overflow: 'hidden' // Чтобы у списков не торчали края за скругления
              }}
            >
              {section.items.map((item, itemIndex) => (
                <Box key={itemIndex}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      p: 2,
                      cursor: 'pointer',
                      '&:hover': { bgcolor: '#fcfdfe' }
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
                      {item.title}
                    </Typography>
                    
                    {/* Значение (если есть) выводится справа голубым цветом */}
                    {item.value && (
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#0077a5' }}>
                        {item.value}
                      </Typography>
                    )}
                  </Box>
                  
                  {/* Разделитель между пунктами (кроме последнего) */}
                  {itemIndex !== section.items.length - 1 && (
                    <Divider sx={{ mx: 2, borderColor: '#f0f5fa' }} />
                  )}
                </Box>
              ))}
            </Box>

          </Box>
        ))}

        {/* Кнопка выхода */}
        <Button 
          variant="outlined" 
          fullWidth 
          sx={{ 
            py: 2, 
            borderRadius: '12px', 
            bgcolor: 'white',
            borderColor: '#e0e6ed',
            color: '#1a1a1a', 
            fontWeight: 800, 
            fontSize: '1rem',
            textTransform: 'none',
            '&:hover': { bgcolor: '#f0f5fa', borderColor: '#e0e6ed' }
          }}
        >
          Выйти из аккаунта
        </Button>

      </Box>

    </Box>
  );
};