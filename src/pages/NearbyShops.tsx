import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Stack, IconButton, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Импортируем компоненты бесплатной карты Leaflet + хук useMapEvents
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

// Фикс для отображения стандартных иконок маркеров
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Моковые данные
const shops = [
  { id: '1', name: 'Asia Sport', logo: 'https://placehold.co/150x150/ffffff/1a1a1a?text=AS', coords: [42.8228, 74.6163] as [number, number] },
  { id: '2', name: 'Velopro', logo: 'https://placehold.co/150x150/ff7f00/ffffff?text=V', coords: [42.8765, 74.6145] as [number, number] },
  { id: '3', name: 'Gergert sport', logo: 'https://placehold.co/150x150/ffffff/d32f2f?text=G', coords: [42.8270, 74.6190] as [number, number] },
];

// Специальный компонент для отслеживания кликов по карте
const MapInteractionHandler: React.FC<{ onMapInteract: () => void }> = ({ onMapInteract }) => {
  useMapEvents({
    click: onMapInteract,      // Закрываем при клике
    dragstart: onMapInteract,  // Закрываем при попытке двигать карту
  });
  return null;
};

export const NearbyShops: React.FC = () => {
  const navigate = useNavigate();
  // Состояние: открыта панель (true) или свернута (false)
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // ИСПРАВЛЕНО: Убрали fixed. Теперь высота равна экрану МИНУС нижнее меню (80px).
    // Это уберет баги с "помехами" при возврате назад.
    <Box sx={{ height: 'calc(100vh - 80px)', width: '100%', overflow: 'hidden', position: 'relative', bgcolor: '#f4f7fb' }}>
      
      {/* Кнопка "Назад" */}
      <IconButton 
        onClick={() => navigate(-1)}
        sx={{ 
          position: 'absolute', 
          top: 16, 
          left: 16, 
          zIndex: 1000, 
          bgcolor: '#dcefff', 
          color: '#0077a5',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
          '&:hover': { bgcolor: '#c5e4ff' }
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Информационная плашка */}
      <Paper 
        elevation={0}
        sx={{ 
          position: 'absolute', top: 16, left: 64, right: 16, zIndex: 1000, 
          p: 1.5, borderRadius: '12px', bgcolor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)', border: '1px solid #e0e6ed',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.05)'
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
          Найдено {shops.length} мастерских
        </Typography>
        <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 600 }}>
          Кликните на маркер, чтобы посмотреть описание
        </Typography>
      </Paper>

      {/* Интерактивная карта */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        <MapContainer 
          center={[42.85, 74.60]} 
          zoom={13} 
          style={{ width: '100%', height: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Слушатель событий карты: при клике сворачиваем панель */}
          <MapInteractionHandler onMapInteract={() => setIsExpanded(false)} />
          
          {/* Отрисовка маркеров */}
          {shops.map((shop) => (
            <Marker key={shop.id} position={shop.coords}>
              <Popup>
                <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
                  <strong style={{ color: '#0077a5', fontSize: '14px' }}>{shop.name}</strong>
                  <br />
                  <a href={`/shop/${shop.id}`} style={{ color: '#8b9eb0', fontSize: '12px', textDecoration: 'none', marginTop: '8px', display: 'inline-block' }}>Подробнее &rarr;</a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>

      {/* Выдвижная нижняя панель */}
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: 0, // Привязана к низу НАШЕГО контейнера (а значит, лежит ровно над нижним меню)
          left: 0,
          right: 0,
          height: '60%', 
          bgcolor: '#f4f7fb', 
          borderRadius: '24px 24px 0 0', 
          zIndex: 1000, 
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px -8px 24px rgba(0,0,0,0.12)',
          transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
          // В свернутом виде оставляем торчать только шапку (76px)
          transform: isExpanded ? 'translateY(0)' : 'translateY(calc(100% - 76px))', 
        }}
      >
        {/* Шапка панели (кликабельная зона) */}
        <Box 
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{ 
            height: 76, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            cursor: 'pointer',
            pt: 1.5,
            px: 2,
            borderRadius: '24px 24px 0 0',
            '&:active': { bgcolor: 'rgba(0,0,0,0.02)' },
          }}
        >
          <Box sx={{ width: 40, height: 5, bgcolor: '#c5d1de', borderRadius: '10px', mb: 2 }} />
          
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a1a1a' }}>
              Мастерские рядом
            </Typography>
            <Typography variant="body2" sx={{ color: '#0077a5', fontWeight: 700 }}>
              {isExpanded ? 'Скрыть' : 'Показать'}
            </Typography>
          </Box>
        </Box>

        {/* Прокручиваемый список */}
        <Box sx={{ flex: 1, overflowY: 'auto', px: 2, pb: 4 }}>
          <Stack spacing={2.5} sx={{ mt: 1 }}>
            {shops.map((shop) => (
              <Box key={shop.id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                
                <Box 
                  component="img" 
                  src={shop.logo} 
                  alt={shop.name}
                  sx={{ 
                    width: 64, 
                    height: 64, 
                    borderRadius: '12px', 
                    border: '1px solid #0077a5',
                    objectFit: 'contain',
                    bgcolor: 'white'
                  }} 
                />
                
                <Typography variant="subtitle1" sx={{ flex: 1, fontWeight: 700, color: '#1a1a1a' }}>
                  {shop.name}
                </Typography>
                
                <Button 
                  variant="contained" 
                  disableElevation
                  onClick={() => navigate(`/shop/${shop.id}`)}
                  sx={{ 
                    bgcolor: '#0077a5', 
                    color: 'white',
                    borderRadius: '8px', 
                    textTransform: 'none', 
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    '&:hover': { bgcolor: '#005f85' }
                  }}
                >
                  Перейти
                </Button>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

    </Box>
  );
};