import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton, Divider, InputBase } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

const topics = ['Покупки', 'Продажи', 'Безопасность', 'Доставка'];
const faqs = [
  'Как работает безопасная сделка?',
  'Как вернуть товар, если он не подошел?',
  'Какая комиссия сервиса при продаже?',
  'Что делать, если продавец не отвечает?',
];

export const Support: React.FC = () => {
  const navigate = useNavigate();

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
          Поддержка
        </Typography>
      </Box>

      <Box sx={{ px: 2, pt: 3 }}>
        
        {/* Поле поиска / ввода */}
        <Box 
          sx={{ 
            bgcolor: 'white', 
            border: '1px solid #e0e6ed', 
            borderRadius: '12px', 
            px: 2, 
            py: 1.5,
            mb: 3
          }}
        >
          <InputBase
            fullWidth
            placeholder="Чем мы можем помочь?"
            sx={{
              fontWeight: 600,
              color: '#0077a5',
              '& input::placeholder': {
                color: '#8b9eb0',
                opacity: 1,
              },
            }}
          />
        </Box>

        {/* Темы вопросов */}
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 1.5 }}>
          Темы вопросов
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 4 }}>
          {topics.map((text) => (
            <Box 
              key={text} 
              sx={{ 
                bgcolor: 'white', 
                p: 2, 
                borderRadius: '16px',
                border: '1px solid #f0f5fa',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': { bgcolor: '#fcfdfe', borderColor: '#e0e6ed' }
              }}
            >
              {/* Голубой кружок-заглушка для иконки */}
              <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: '#dcefff', mb: 1.5 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1a1a1a' }}>
                {text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Популярные вопросы */}
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 1.5 }}>
          Популярные вопросы
        </Typography>
        <Box sx={{ bgcolor: 'white', borderRadius: '16px', border: '1px solid #e0e6ed', mb: 4, overflow: 'hidden' }}>
          {faqs.map((faq, index) => (
            <Box key={faq}>
              <Box 
                sx={{ 
                  p: 2, 
                  cursor: 'pointer',
                  '&:hover': { bgcolor: '#fcfdfe' }
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
                  {faq}
                </Typography>
              </Box>
              {index !== faqs.length - 1 && (
                <Divider sx={{ mx: 2, borderColor: '#f0f5fa' }} />
              )}
            </Box>
          ))}
        </Box>

        {/* Блок "Не нашли ответ?" */}
        <Box 
          sx={{ 
            bgcolor: 'white', 
            borderRadius: '16px', 
            p: 3, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            textAlign: 'center',
            border: '1px solid #e0e6ed'
          }}
        >
          <HelpOutlinedIcon sx={{ fontSize: 48, color: '#1a1a1a', mb: 1.5 }} />
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 1, lineHeight: 1.2 }}>
            Не нашли ответ?
          </Typography>
          <Typography variant="body2" sx={{ color: '#8b9eb0', fontWeight: 600, mb: 3, px: 1 }}>
            Наша команда поддержки всегда на связи и готова помочь вам с любым вопросом.
          </Typography>
          <Button 
            variant="contained" 
            fullWidth 
            disableElevation
            sx={{ 
              py: 1.8, 
              borderRadius: '12px', 
              bgcolor: '#0077a5', 
              fontWeight: 800, 
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': { bgcolor: '#005f85' }
            }}
          >
            Написать в чат
          </Button>
        </Box>

      </Box>
    </Box>
  );
};