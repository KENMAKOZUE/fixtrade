import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Avatar, TextField, Button } from '@mui/material';

// Твое фото
import userIcon from '../data/icon.png';

export const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('Имя Пользователя');
  const [phone, setPhone] = useState('+996(777)777-777');
  const [email, setEmail] = useState('jetim.kg@example.com');
  const [city, setCity] = useState('Бишкек');
  const [about, setAbout] = useState('Люблю велики');

  const handleSave = () => {
    navigate(-1); 
  };

  // ИСПРАВЛЕНО: внутри вложенных селекторов нужно писать полные CSS-свойства
  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#f0f4f9', 
      borderRadius: '12px',
      fontWeight: 600,
      color: '#1a1a1a',
      '& fieldset': { border: 'none' }, 
    },
    '& .MuiInputBase-input': {
      paddingTop: '14px', 
      paddingBottom: '14px',
      paddingLeft: '16px', 
      paddingRight: '16px',
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f7f9fc', pb: 12 }}>
      
      {/* Кастомная Шапка */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          px: 2, 
          py: 2, 
          bgcolor: 'white', 
          borderBottom: '1px solid #f0f5fa' 
        }}
      >
        <Typography 
          onClick={() => navigate(-1)} 
          sx={{ fontWeight: 700, color: '#1a1a1a', cursor: 'pointer', fontSize: '1rem' }}
        >
          Назад
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '1.1rem' }}>
          Редактирование
        </Typography>
        <Typography 
          onClick={handleSave} 
          sx={{ fontWeight: 800, color: '#0077a5', cursor: 'pointer', fontSize: '1rem' }}
        >
          Готово
        </Typography>
      </Box>

      {/* Аватарка */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
        <Avatar src={userIcon} sx={{ width: 100, height: 100, bgcolor: '#1a1a1a' }} />
      </Box>

      {/* Форма */}
      <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        
        <Box>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#8b9eb0' }}>
            Имя и фамилия
          </Typography>
          <TextField fullWidth value={name} onChange={(e) => setName(e.target.value)} sx={inputStyles} />
        </Box>

        <Box>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#8b9eb0' }}>
            Телефон
          </Typography>
          <TextField fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} sx={inputStyles} />
        </Box>

        <Box>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#8b9eb0' }}>
            Email
          </Typography>
          <TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} sx={inputStyles} />
        </Box>

        <Box>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#8b9eb0' }}>
            Город
          </Typography>
          <TextField fullWidth value={city} onChange={(e) => setCity(e.target.value)} sx={inputStyles} />
        </Box>

        <Box>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#8b9eb0' }}>
            О себе
          </Typography>
          <TextField fullWidth value={about} onChange={(e) => setAbout(e.target.value)} sx={inputStyles} />
        </Box>

      </Box>

      {/* Кнопка "Сохранить изменения" */}
      <Box sx={{ px: 2, mt: 5 }}>
        <Button 
          variant="contained" 
          fullWidth 
          onClick={handleSave}
          disableElevation
          sx={{ 
            py: 2, 
            borderRadius: '12px', 
            bgcolor: '#0077a5', 
            fontWeight: 700, 
            fontSize: '1rem',
            textTransform: 'none',
            '&:hover': { bgcolor: '#005f85' }
          }}
        >
          Сохранить изменения
        </Button>
      </Box>

    </Box>
  );
};