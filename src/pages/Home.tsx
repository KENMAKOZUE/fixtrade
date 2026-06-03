import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Paper,
  IconButton,
  Button,
  CardMedia,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import BikeScooterOutlinedIcon from '@mui/icons-material/BikeScooterOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { mockListings } from '../data/mockListings';

// Импорты для мини-карты Leaflet
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Настройка иконок для карты
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const categories = [
  { label: 'Велосипеды', icon: <BikeScooterOutlinedIcon fontSize="medium" /> },
  { label: 'Запчасти', icon: <BuildOutlinedIcon fontSize="medium" /> },
  { label: 'Экипировка', icon: <BoltOutlinedIcon fontSize="medium" /> },
  { label: 'Аксессуары', icon: <WidgetsOutlinedIcon fontSize="medium" /> },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [likedItems, setLikedItems] = useState<string[]>([]);

  const toggleLike = (id: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ pt: 2, pb: 12, bgcolor: '#ffffff', minHeight: '100vh' }}>
      {/* Шапка */}
      <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
          <Box component="span" sx={{ color: '#0077a5' }}>Fix</Box>
          <Box component="span" sx={{ color: '#1a1a1a' }}>Trade</Box>
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton sx={{ color: '#0077a5', bgcolor: '#f0f5fa' }} onClick={() => navigate('/notifications')}>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton sx={{ color: '#1a1a1a', bgcolor: '#f0f5fa' }} onClick={() => navigate('/profile')}>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Stack>
      </Box>

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
          onClick={() => navigate('/catalog')}
        >
          <FilterListIcon />
        </IconButton>
      </Box>

      {/* Категории */}
      <Typography variant="subtitle1" sx={{ px: 2, fontWeight: 700, mb: 1.5 }}>
        Категории
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, mb: 4, px: 2, justifyContent: 'space-between' }}>
        {categories.map((category) => (
          <Paper
            key={category.label}
            elevation={0}
            onClick={() => navigate('/catalog', { state: { category: category.label } })}
            sx={{
              flex: 1, 
              p: '12px 4px', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              borderRadius: '16px',
              bgcolor: '#f0f5fa',
              color: '#0077a5',
              cursor: 'pointer',
            }}
          >
            {category.icon}
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 600, 
                fontSize: '0.75rem', 
                color: '#1a1a1a',
                textAlign: 'center',
                lineHeight: 1.2
              }}
            >
              {category.label}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* ИСПРАВЛЕНА СЕКЦИЯ: Мастерские рядом с настоящей мини-картой */}
      <Box sx={{ px: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Мастерские рядом
          </Typography>
          <Button size="small" sx={{ color: '#0077a5', fontWeight: 600, textTransform: 'none' }} onClick={() => navigate('/shops')}>
            На карте
          </Button>
        </Box>
        
        {/* Карточка с картой */}
        <Card 
          elevation={0} 
          onClick={() => navigate('/shops')} // При клике на всю карточку переходим на большую карту
          sx={{ 
            border: '1px solid #e0e6ed', 
            borderRadius: '16px', 
            mb: 4, 
            overflow: 'hidden',
            cursor: 'pointer' 
          }}
        >
          <Box sx={{ height: 140, position: 'relative' }}>
            {/* Мини-карта. 
              Отключаем zoomControl, dragging, touchZoom и т.д., чтобы карта была "картинкой"
              и не перехватывала скролл пользователя вниз по странице.
            */}
            <MapContainer 
              center={[42.8746, 74.5698]} // Центр Бишкека
              zoom={12} 
              zoomControl={false}
              dragging={false}
              touchZoom={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              style={{ width: '100%', height: '100%', zIndex: 1 }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* Пара маркеров для красоты (центр и юг Бишкека) */}
              <Marker position={[42.8752, 74.5880]} />
              <Marker position={[42.8228, 74.6163]} />
            </MapContainer>
            
            {/* Прозрачный блок поверх карты, чтобы предотвратить любые клики внутри самой карты */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }} />
          </Box>
          
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pb: "16px !important" }}>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1rem' }}>
                4 мастерские
              </Typography>
              <Typography variant="body2" color="text.secondary">
                В радиусе 5 км
              </Typography>
            </Box>
            <Button variant="contained" sx={{ bgcolor: '#0077a5', textTransform: 'none', borderRadius: '8px' }} size="small">
              Подробнее
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Рекомендации */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, px: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Рекомендации
        </Typography>
        <Button size="small" sx={{ color: '#0077a5', fontWeight: 600, textTransform: 'none' }} onClick={() => navigate('/catalog')}>
          Все
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, mb: 3, px: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
        {mockListings.slice(0, 3).map((item) => (
          <Card
            key={item.id}
            elevation={0}
            sx={{
              minWidth: 160,
              width: 160,
              borderRadius: '16px',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => navigate(`/listing/${item.id}`)}
          >
            <CardMedia
              component="img"
              height="140"
              image={(item as any).images?.[0] || 'https://placehold.co/400x300/f0f5fa/8b9eb0?text=Photo'}
              alt={item.title}
              sx={{ borderRadius: '16px', objectFit: 'cover' }}
            />
            <IconButton
              sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'rgba(255,255,255,0.8)', color: likedItems.includes(item.id) ? '#d32f2f' : '#1a1a1a' }}
              onClick={(event) => toggleLike(item.id, event)}
              size="small"
            >
              {likedItems.includes(item.id) ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
            </IconButton>
          </Card>
        ))}
      </Box>

      {/* Сетка товаров */}
      <Box sx={{ px: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 1.5 }}>
          <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
            Отличное состояние
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
            Новые
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
          {mockListings.map((item) => (
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
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={(item as any).images?.[0] || 'https://placehold.co/400x300/f0f5fa/8b9eb0?text=Photo'}
                alt={item.title}
                sx={{ borderRadius: '16px', objectFit: 'cover' }}
              />
              <IconButton
                sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'rgba(255,255,255,0.8)', color: likedItems.includes(item.id) ? '#d32f2f' : '#1a1a1a' }}
                onClick={(event) => toggleLike(item.id, event)}
                size="small"
              >
                {likedItems.includes(item.id) ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
              </IconButton>
              <CardContent sx={{ p: '12px 0 0 0 !important' }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a1a1a', mb: 0.5, fontSize: '1.1rem' }}>
                  {item.price.toLocaleString('ru-RU')} сом
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5, lineHeight: 1.2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                  {item.condition === 'Б/У' ? 'Б/у, без царапин' : 'Новое'}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

    </Box>
  );
};