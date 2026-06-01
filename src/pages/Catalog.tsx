import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Card, CardMedia, CardContent, CardActionArea, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { mockListings } from '../data/mockListings';

const categories = ['Все', 'Велосипеды', 'Запчасти', 'Аксессуары', 'Инструменты'];

export const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Все');
  const [search, setSearch] = useState('');

  const filteredListings = mockListings.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.subtitle.toLowerCase().includes(search.toLowerCase());
    return activeCategory === 'Все' || item.category === activeCategory ? matchesSearch : false;
  });

  return (
    <Box sx={{ pt: 2, pb: 12, px: 1.5 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, ml: 0.5 }}>
        Каталог
      </Typography>

      <Box sx={{ position: 'relative', mb: 2 }}>
        <SearchIcon sx={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9aa5b1', zIndex: 2 }} />
        <TextField
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск велосипедов и запчастей"
          size="small"
          sx={{
            bgcolor: '#f4fbff',
            borderRadius: 3,
            '& .MuiInputBase-input': {
              pl: '44px',
            },
          }}
        />
      </Box>

      <Box sx={{ mb: 2, display: 'flex', gap: 1, overflowX: 'auto', pb: 1 }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            clickable
            color={activeCategory === category ? 'primary' : 'default'}
            onClick={() => setActiveCategory(category)}
            sx={{ flex: '0 0 auto', borderRadius: 2, textTransform: 'none' }}
          />
        ))}
      </Box>

      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
        Результаты
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
        {filteredListings.map((item) => (
          <Card key={item.id} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <CardActionArea onClick={() => navigate(`/listing/${item.id}`)}>
              <Box sx={{ height: 140, bgcolor: '#d9d9d9' }} />
              <CardContent sx={{ pb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {item.subtitle}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {item.price.toLocaleString('ru-RU')} сом
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
