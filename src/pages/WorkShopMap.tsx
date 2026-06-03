import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Импортируем компоненты бесплатной карты
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Исправляем баг Leaflet, когда на карте пропадают иконки маркеров
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Данные мастерских в Бишкеке (координаты те же)
const workshops = [
  { id: 1, name: 'Веломастерская на Южной магистрали', coords: [42.8228, 74.6163] as [number, number], time: '10:00 - 20:00' },
  { id: 2, name: 'FixBike ЦУМ (Велопарковка)', coords: [42.8765, 74.6145] as [number, number], time: '09:00 - 21:00' },
  { id: 3, name: 'Pro-Bike 10 мкр', coords: [42.8270, 74.6190] as [number, number], time: '10:00 - 19:00' },
  { id: 4, name: 'Мастерская возле Бишкек Парка', coords: [42.8752, 74.5880] as [number, number], time: 'Круглосуточно' },
];

export const WorkshopsMap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f4f7fb' }}>
      
      {/* Шапка */}
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2, bgcolor: 'white', zIndex: 1000, boxShadow: '0px 4px 12px rgba(0,0,0,0.05)' }}>
        <IconButton 
          onClick={() => navigate(-1)}
          sx={{ bgcolor: '#dcefff', color: '#0077a5', mr: 2, width: 40, height: 40, '&:hover': { bgcolor: '#c5e4ff' } }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '1.1rem' }}>
          Мастерские рядом (OSM)
        </Typography>
      </Box>

      {/* Контейнер для карты */}
      <Box sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
        
        {/* Информационная плашка */}
        <Paper 
          elevation={0}
          sx={{ 
            position: 'absolute', top: 16, left: 16, right: 16, zIndex: 1000, 
            p: 1.5, borderRadius: '12px', bgcolor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)', border: '1px solid #e0e6ed'
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
            Найдено {workshops.length} мастерских
          </Typography>
          <Typography variant="caption" sx={{ color: '#8b9eb0', fontWeight: 600 }}>
            Кликните на маркер, чтобы посмотреть описание
          </Typography>
        </Paper>

        {/* Сама бесплатная карта OpenStreetMap */}
        <MapContainer 
          center={[42.8746, 74.5698]} // Центр Бишкека
          zoom={13} 
          style={{ width: '100%', height: '100%' }}
          zoomControl={false} // Отключаем дефолтные кнопки, если они мешают дизайну
        >
          {/* Слой самой карты (текстуры дорог и зданий) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Отрисовка меток */}
          {workshops.map((shop) => (
            <Marker key={shop.id} position={shop.coords}>
              <Popup>
                <div style={{ fontFamily: 'sans-serif' }}>
                  <b style={{ color: '#0077a5' }}>{shop.name}</b>
                  <br />
                  <span style={{ color: '#8b9eb0', fontSize: '12px' }}>Режим: {shop.time}</span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

      </Box>
    </Box>
  );
};