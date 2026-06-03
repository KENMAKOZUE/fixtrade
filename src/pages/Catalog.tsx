import React, { useState } from 'react';
import { Box, Typography, InputBase, IconButton, Menu, MenuItem, Card, CardMedia, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Список категорий
const categories = [
  'Все', 'Шоссейные', 'МТВ', 'BMX', 'Fixed Gear', 
  'Гревел', 'Городские', 'Для женщин', 'Запчасти', 
  'Аксессуары', 'Инструменты'
];

// Реалистичные шаблоны для каждой категории
const mockListings = [
  {
    id: '1',
    title: 'Шоссейный Specialized Tarmac SL7',
    price: '350 000 с',
    city: 'Бишкек',
    time: 'Вчера, 18:20',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=Specialized+Tarmac',
    category: 'Шоссейные',
  },
  {
    id: '2',
    title: 'Горный велосипед Trek Marlin 7 Gen 3',
    price: '65 000 с',
    city: 'Ош',
    time: 'Сегодня, 10:15',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=Trek+Marlin',
    category: 'МТВ',
  },
  {
    id: '3',
    title: 'Трюковой BMX Wethepeople Nova 20"',
    price: '30 000 с',
    city: 'Бишкек',
    time: 'Сегодня, 12:00',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=WTP+Nova',
    category: 'BMX',
  },
  {
    id: '4',
    title: 'Трековый Aventon Cordoba (Custom)',
    price: '45 000 с',
    city: 'Бишкек',
    time: '28 мая, 14:30',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=Aventon+Cordoba',
    category: 'Fixed Gear',
  },
  {
    id: '5',
    title: 'Гравийный Cannondale Topstone 3',
    price: '115 000 с',
    city: 'Бишкек',
    time: 'Сегодня, 14:30',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=Cannondale+Topstone',
    category: 'Гревел',
  },
  {
    id: '6',
    title: 'Круизер Electra Cruiser 1 Mens',
    price: '35 000 с',
    city: 'Кант',
    time: 'Вчера, 09:00',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=Electra+Cruiser',
    category: 'Городские',
  },
  {
    id: '7',
    title: 'Женский Liv Avail AR 3 (Размер S)',
    price: '85 000 с',
    city: 'Бишкек',
    time: '1 июня, 11:20',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=Liv+Avail',
    category: 'Для женщин',
  },
  {
    id: '8',
    title: 'Карбоновый руль FSA K-Force',
    price: '8 500 с',
    city: 'Бишкек',
    time: 'Сегодня, 08:45',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=FSA+K-Force',
    category: 'Запчасти',
  },
  {
    id: '9',
    title: 'Аэродинамичный шлем Lazer V2',
    price: '5 000 с',
    city: 'Бишкек',
    time: 'Вчера, 20:10',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=Lazer+Helmet',
    category: 'Аксессуары',
  },
  {
    id: '10',
    title: 'Набор шестигранников Park Tool',
    price: '2 500 с',
    city: 'Токмок',
    time: '30 мая, 16:40',
    image: 'https://placehold.co/400x300/f4f7fb/8b9eb0?text=Park+Tool',
    category: 'Инструменты',
  }
];

export const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    handleCloseMenu();
  };

  // Фильтруем товары: если "Все" — показываем все, иначе только нужную категорию
  const filteredListings = selectedCategory === 'Все' 
    ? mockListings 
    : mockListings.filter(item => item.category === selectedCategory);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff', pb: 12 }}>
      
      {/* Шапка */}
      <Box sx={{ px: 2, pt: 3, pb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.5px' }}>
          {selectedCategory === 'Все' ? 'Каталог' : selectedCategory}
        </Typography>
      </Box>

      {/* Строка Поиска и Кнопка Фильтра */}
      <Box sx={{ display: 'flex', gap: 1.5, px: 2, mb: 3 }}>
        <Box 
          sx={{ 
            flex: 1, display: 'flex', alignItems: 'center', 
            bgcolor: '#f0f5fa', borderRadius: '16px', px: 2 
          }}
        >
          <SearchIcon sx={{ color: '#8b9eb0', mr: 1 }} />
          <InputBase
            fullWidth
            placeholder="Поиск объявлений..."
            sx={{
              py: 1.5, fontSize: '0.95rem', fontWeight: 600, color: '#1a1a1a',
              '& input::placeholder': { color: '#8b9eb0', opacity: 1 },
            }}
          />
        </Box>

        <IconButton 
          onClick={handleOpenMenu}
          sx={{ 
            bgcolor: '#0077a5', color: 'white', borderRadius: '16px', 
            width: 56, height: 56, '&:hover': { bgcolor: '#005f85' }
          }}
        >
          <FilterAltOutlinedIcon />
        </IconButton>
      </Box>

      {/* Выпадающее меню категорий */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleCloseMenu}
        // Настройка позиционирования, чтобы открывалось ровно под кнопкой
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        // Стилизация самой плашки меню
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              bgcolor: '#eaf4fc', // Светло-голубой фон из твоего макета
              borderRadius: '12px',
              minWidth: 200,
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
              padding: 0
            }
          },
          list: {
            sx: { py: 0 }
          }
        }}
      >
        {categories.map((category, index) => {
          const isLast = index === categories.length - 1;
          const isSelected = category === selectedCategory;

          return (
            <MenuItem 
              key={category} 
              onClick={() => handleSelectCategory(category)}
              sx={{
                borderBottom: isLast ? 'none' : '1px solid #0077a5',
                mx: 2, px: 0, py: 1.5, fontWeight: 700,
                color: isSelected ? '#0077a5' : '#1a1a1a',
                '&:hover': { bgcolor: 'transparent', color: '#0077a5' }
              }}
            >
              {category}
            </MenuItem>
          );
        })}
      </Menu>

      {/* Сетка товаров (2 колонки) */}
      <Box sx={{ px: 2 }}>
        {filteredListings.length > 0 ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
            {filteredListings.map((item) => (
              <Card 
                key={item.id} 
                elevation={0}
                sx={{ 
                  borderRadius: '12px', 
                  border: '1px solid #f0f5fa',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.title}
                  />
                  <IconButton 
                    sx={{ 
                      position: 'absolute', top: 8, right: 8, 
                      bgcolor: 'rgba(255, 255, 255, 0.8)', p: 0.5,
                      '&:hover': { bgcolor: 'white' }
                    }}
                  >
                    <FavoriteBorderIcon fontSize="small" sx={{ color: '#1a1a1a' }} />
                  </IconButton>
                </Box>
                <CardContent sx={{ p: 1.5, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', '&:last-child': { pb: 1.5 } }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1a1a1a', lineHeight: 1.2, mb: 0.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0077a5', mb: 1 }}>
                      {item.price}
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 500 }}>
                    {item.city} • {item.time}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          <Typography variant="body2" sx={{ color: '#8b9eb0', textAlign: 'center', mt: 5 }}>
            В категории «{selectedCategory}» пока нет объявлений.
          </Typography>
        )}
      </Box>

    </Box>
  );
};