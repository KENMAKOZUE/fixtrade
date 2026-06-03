import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useNavigate } from 'react-router-dom';

// Категории теперь точно как на твоем скриншоте (4 штуки для ровной сетки 2x2)
const categories = ['Велосипеды', 'Запчасти', 'Экипировка', 'Аксессуары'];
const statuses = ['Новое', 'Б/У', 'На запчасти'];

export const AddListing: React.FC = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('Велосипеды');
  const [status, setStatus] = useState('Б/У');
  const [title, setTitle] = useState('Шоссейный велосипед Merida');
  const [price, setPrice] = useState('120 000');
  const [photos, setPhotos] = useState<string[]>([]);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const urls: string[] = [];
      Array.from(files).forEach((file) => {
        urls.push(URL.createObjectURL(file));
      });
      setPhotos((prev) => [...prev, ...urls].slice(0, 10));
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff', pb: 12, pt: 2, px: 2 }}>
      
      {/* Заголовок страницы (отцентрирован, без стрелки назад, как на макете) */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, color: '#1a1a1a' }}>
          Новое объявление
        </Typography>
        <Typography variant="body2" sx={{ color: '#8b9eb0', fontWeight: 600, mt: 0.5 }}>
          Шаг 1 из 2
        </Typography>
      </Box>

      {/* Блок добавления фото */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 1.5 }}>
          Фотографии <Typography component="span" sx={{ color: '#8b9eb0', fontSize: '0.9rem', fontWeight: 600 }}>до 10 шт</Typography>
        </Typography>

        <Button
          component="label"
          fullWidth
          sx={{
            minHeight: 180,
            borderRadius: '24px',
            bgcolor: '#f0f5fa',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'none',
            py: 4,
            '&:hover': { bgcolor: '#e3effb' } // Легкий эффект при наведении
          }}
        >
          {/* Круглая иконка камеры */}
          <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: '#0077a5', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <CameraAltOutlinedIcon sx={{ color: 'white', fontSize: 28 }} />
          </Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 0.5 }}>
            Добавить фото
          </Typography>
          <Typography variant="body2" sx={{ color: '#8b9eb0', fontWeight: 600 }}>
            Первое фото будет на обложке
          </Typography>
          <input hidden accept="image/*" type="file" multiple onChange={handlePhotoUpload} />
        </Button>
        
        {/* Превью загруженных фотографий (если пользователь их выбрал) */}
        {photos.length > 0 && (
          <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', mt: 2, pb: 1 }}>
            {photos.map((src) => (
              <Box key={src} component="img" src={src} sx={{ width: 80, height: 80, borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }} />
            ))}
          </Box>
        )}
      </Box>

      {/* Выбор Категории (Сетка 2x2) */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 1.5 }}>
          Категория
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5 }}>
          {categories.map((item) => {
            const isActive = item === category;
            return (
              <Box
                key={item}
                onClick={() => setCategory(item)}
                sx={{
                  py: 1.5,
                  textAlign: 'center',
                  borderRadius: '12px',
                  bgcolor: isActive ? '#0077a5' : '#f0f5fa',
                  color: isActive ? 'white' : '#0077a5',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {item}
              </Box>
            )
          })}
        </Box>
      </Box>

      {/* Название объявления */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 1.5 }}>
          Название объявления
        </Typography>
        <TextField
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Шоссейный велосипед Merida"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '16px', // Округлые инпуты
              bgcolor: '#fcfdfe',
              fontWeight: 600,
              '& fieldset': { borderColor: '#e0e6ed' },
              '&:hover fieldset': { borderColor: '#0077a5' },
              '&.Mui-focused fieldset': { borderColor: '#0077a5' },
            }
          }}
        />
      </Box>

      {/* Выбор Состояния */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 1.5 }}>
          Состояние
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          {statuses.map((item) => {
            const isActive = item === status;
            return (
              <Box
                key={item}
                onClick={() => setStatus(item)}
                sx={{
                  px: 2.5,
                  py: 1.2,
                  borderRadius: '12px',
                  bgcolor: isActive ? '#0077a5' : '#f0f5fa',
                  color: isActive ? 'white' : '#0077a5',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {item}
              </Box>
            )
          })}
        </Box>
      </Box>

      {/* Цена */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 1.5 }}>
          Цена
        </Typography>
        <TextField
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="120 000"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '16px',
              bgcolor: '#fcfdfe',
              fontWeight: 600,
              '& fieldset': { borderColor: '#e0e6ed' },
              '&:hover fieldset': { borderColor: '#0077a5' },
              '&.Mui-focused fieldset': { borderColor: '#0077a5' },
            }
          }}
        />
      </Box>

      {/* Линейная (outlined) кнопка Продолжить */}
      <Button 
        variant="outlined" 
        fullWidth 
        size="large" 
        sx={{ 
          py: 2, 
          borderRadius: '16px', 
          fontWeight: 800,
          fontSize: '1rem',
          borderWidth: '2px',
          color: '#0077a5',
          borderColor: '#0077a5',
          '&:hover': { borderWidth: '2px', borderColor: '#005f85', bgcolor: '#f0f5fa' }
        }} 
        onClick={() => navigate('/') }
      >
        Продолжить
      </Button>

    </Box>
  );
};