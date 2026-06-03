import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  InputBase,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { mockListings } from '../data/mockListings';
import { useNavigate, useLocation } from 'react-router-dom';

const categories = ['Все', 'Велосипеды', 'Запчасти', 'Аксессуары', 'Инструменты'];

export const Catalog: React.FC = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  
  // Достаем переданную категорию или ставим 'Все' по умолчанию
  const initialCategory = location.state?.category || 'Все';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  // ... дальше твой код
  const [search, setSearch] = useState('');
  const [likedItems, setLikedItems] = useState<string[]>([]);

  // === ТА САМАЯ ЛОГИКА ФИЛЬТРАЦИИ ===
  const filteredListings = mockListings.filter((item) => {
    // 1. Проверяем совпадение по поиску (название или описание)
    const titleMatch = item.title?.toLowerCase().includes(search.toLowerCase());
    const subtitleMatch = item.subtitle?.toLowerCase().includes(search.toLowerCase());
    const matchesSearch = titleMatch || subtitleMatch;
    
    // 2. Проверяем совпадение по категории (если выбрано "Все", то пропускаем всё)
    const matchesCategory = activeCategory === 'Все' || item.category === activeCategory;
    
    // 3. Товар должен пройти ОБЕ проверки, чтобы появиться на экране
    return matchesCategory && matchesSearch; 
  });

  const toggleLike = (id: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8f9fa', pb: 12, pt: 2 }}>
      
      {/* Заголовок страницы */}
      <Typography variant="h5" sx={{ px: 2, fontWeight: 800, mb: 2, color: '#1a1a1a' }}>
        Каталог
      </Typography>

      {/* Поиск и Фильтр */}
      <Box sx={{ px: 2, display: 'flex', gap: 1.5, mb: 3 }}>
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            px: 2,
            bgcolor: '#f0f5fa',
            borderRadius: '16px',
          }}
        >
          <SearchIcon sx={{ color: '#8b9eb0', mr: 1 }} />
          <InputBase
            placeholder="Поиск велосипедов и запчастей"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1, fontSize: '0.9rem', color: '#1a1a1a', py: 1.5 }}
          />
        </Paper>
        <IconButton
          sx={{
            bgcolor: '#0077a5',
            color: 'white',
            borderRadius: '12px',
            width: 52,
            height: 52,
            '&:hover': { bgcolor: '#005f85' },
          }}
        >
          <FilterListIcon />
        </IconButton>
      </Box>

      {/* Категории */}
      <Box 
        sx={{ 
          display: 'flex', 
          gap: 1.5, 
          overflowX: 'auto', 
          px: 2, 
          mb: 3, 
          pb: 1,
          '&::-webkit-scrollbar': { display: 'none' } 
        }}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <Box
              key={category}
              onClick={() => setActiveCategory(category)}
              sx={{
                flexShrink: 0,
                px: 2.5,
                py: 1,
                borderRadius: '12px',
                bgcolor: isActive ? '#0077a5' : 'transparent',
                color: isActive ? 'white' : '#0077a5',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {category}
            </Box>
          );
        })}
      </Box>

      {/* Сетка товаров или сообщение о пустоте */}
      <Box sx={{ px: 2 }}>
        {filteredListings.length > 0 ? (
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
            {filteredListings.map((item) => (
              <Card
                key={item.id}
                elevation={0}
                onClick={() => navigate(`/listing/${item.id}`)}
                sx={{
                  borderRadius: '16px',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'transparent'
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={(item as any).images?.[0] || 'https://placehold.co/400x400/ffffff/8b9eb0?text=Bike'}
                    alt={item.title}
                    sx={{ borderRadius: '16px', objectFit: 'cover', bgcolor: 'white' }}
                  />
                  <IconButton
                    sx={{ 
                      position: 'absolute', 
                      top: 8, 
                      right: 8, 
                      bgcolor: 'rgba(255,255,255,0.9)', 
                      color: likedItems.includes(item.id) ? '#d32f2f' : '#1a1a1a',
                      '&:hover': { bgcolor: 'white' }
                    }}
                    onClick={(event) => toggleLike(item.id, event)}
                    size="small"
                  >
                    {likedItems.includes(item.id) ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                  </IconButton>
                </Box>
                
                <CardContent sx={{ p: '12px 0 0 0 !important' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 0.5, fontSize: '1.1rem' }}>
                    {item.price.toLocaleString('ru-RU')} сом
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5, lineHeight: 1.2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    {item.condition === 'Б/У' ? 'Отличное состояние' : 'Новый'}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          /* Если товаров в категории нет, показываем это сообщение */
          <Box sx={{ py: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1a1a1a', mb: 1 }}>
              Ничего не найдено
            </Typography>
            <Typography variant="body2" sx={{ color: '#8b9eb0', maxWidth: '80%' }}>
              Попробуйте изменить параметры поиска или выбрать другую категорию
            </Typography>
          </Box>
        )}
      </Box>

    </Box>
  );
};