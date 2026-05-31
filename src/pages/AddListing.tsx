import React, { useState } from 'react';
import { Box, Typography, Button, Chip, TextField, Paper, IconButton, Stack } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

const categories = ['Велосипеды', 'Запчасти', 'Экипировка', 'Аксессуары'];
const statuses = ['Новое', 'Б/У', 'На запчасти'];
const templatePhotos = [
  'https://images.unsplash.com/photo-1508606572321-901ea4437072?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1533810747270-c5c6a4db8d5b?auto=format&fit=crop&w=700&q=80',
];

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
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc' }}>
      <PageHeader title="Новое объявление" showBack />
      <Box sx={{ px: 2, pt: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
          Шаг 1 из 2
        </Typography>

        <Paper sx={{ p: 3, mb: 3, bgcolor: '#eff7ff', borderRadius: 3, textAlign: 'center' }}>
          <Button
            component="label"
            fullWidth
            sx={{
              minHeight: 180,
              borderRadius: 3,
              bgcolor: 'rgba(0, 119, 165, 0.08)',
              border: '1px dashed #0077a5',
              color: '#0077a5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              py: 4,
            }}
          >
            <AddPhotoAlternateIcon sx={{ fontSize: 36, mb: 1 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Добавить фото
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Первое фото будет на обложке
            </Typography>
            <input hidden accept="image/*" type="file" multiple onChange={handlePhotoUpload} />
          </Button>
        </Paper>

        {photos.length > 0 ? (
          <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', mb: 3 }}>
            {photos.map((src, index) => (
              <Paper key={src} sx={{ minWidth: 100, minHeight: 100, borderRadius: 2, overflow: 'hidden' }}>
                <img src={src} alt={`preview-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Paper>
            ))}
          </Stack>
        ) : (
          <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', mb: 3 }}>
            {templatePhotos.map((src, index) => (
              <Paper key={src} sx={{ minWidth: 100, minHeight: 100, borderRadius: 2, overflow: 'hidden' }}>
                <img src={src} alt={`template-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Paper>
            ))}
          </Stack>
        )}

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
            Категория
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {categories.map((item) => (
              <Chip
                key={item}
                label={item}
                clickable
                color={item === category ? 'primary' : 'default'}
                onClick={() => setCategory(item)}
                sx={{ minWidth: 110, py: 1.2, borderRadius: 2 }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
            Название объявления
          </Typography>
          <TextField
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Шоссейный велосипед Merida"
            size="small"
            sx={{ bgcolor: 'white', borderRadius: 2 }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
            Состояние
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {statuses.map((item) => (
              <Chip
                key={item}
                label={item}
                clickable
                color={item === status ? 'primary' : 'default'}
                onClick={() => setStatus(item)}
                sx={{ minWidth: 100, py: 1.2, borderRadius: 2 }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
            Цена
          </Typography>
          <TextField
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="120 000"
            size="small"
            sx={{ bgcolor: 'white', borderRadius: 2 }}
          />
        </Box>

        <Button variant="contained" fullWidth size="large" sx={{ py: 1.8 }} onClick={() => navigate('/') }>
          Продолжить
        </Button>
      </Box>
    </Box>
  );
};
