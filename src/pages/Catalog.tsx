import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Card, CardMedia, CardContent, CardActionArea, Stack, Paper, List, ListItemButton, ListItemText, Chip, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { mockListings } from '../data/mockListings';

const categories = ['Все', 'Шоссейные', 'MTB', 'BMX', 'Fixed Gear', 'Гревел', 'Городские', 'Для женщин', 'Запчасти', 'Аксессуары', 'Инструменты'];

export const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Все');
  const [search, setSearch] = useState('');

  const filteredListings = mockListings.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.subtitle.toLowerCase().includes(search.toLowerCase());
    return activeCategory === 'Все' || item.category === activeCategory ? matchesSearch : false;
  });

  return (
    <Box sx={{ pt: 2, pb: 12 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Каталог
      </Typography>

      <Box sx={{ position: 'relative', mb: 2 }}>
        <SearchIcon sx={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9aa5b1' }} />
        <TextField
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск велосипедов и запчастей"
          size="small"
          sx={{ bgcolor: 'white', borderRadius: 2 }}
        />
      </Box>

      <Paper sx={{ mb: 2, bgcolor: 'white', borderRadius: 3, overflow: 'hidden' }}>
        <List disablePadding>
          {categories.map((category) => (
            <ListItemButton
              key={category}
              selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              sx={{ borderBottom: '1px solid #e8f1f9' }}
            >
              <ListItemText primary={category} />
            </ListItemButton>
          ))}
        </List>
      </Paper>

      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
        Результаты
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {filteredListings.map((item) => (
          <Box key={item.id} sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 180 }}>
            <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
              <CardActionArea onClick={() => navigate(`/listing/${item.id}`)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.images[0]}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
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
          </Box>
        ))}
      </Box>
    </Box>
  );
};
