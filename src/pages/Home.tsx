import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Paper,
  IconButton,
  Avatar,
  Button,
  CardMedia,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import BikeScooterOutlinedIcon from '@mui/icons-material/BikeScooterOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { mockListings } from '../data/mockListings';

const categories = [
  { label: 'Велосипеды', icon: <BikeScooterOutlinedIcon /> },
  { label: 'Запчасти', icon: <BuildOutlinedIcon /> },
  { label: 'Экипировка', icon: <BoltOutlinedIcon /> },
  { label: 'Аксессуары', icon: <WidgetsOutlinedIcon /> },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: 2, pb: 12, bgcolor: '#f7f9fc' }}>
      <Box sx={{ px: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          FixTrade
        </Typography>
        <Stack direction="row" spacing={1}> 
          <IconButton sx={{ bgcolor: 'white', p: 1.2 }} onClick={() => navigate('/notifications')}>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: 'white', p: 1.2 }} onClick={() => navigate('/profile')}>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Stack>
      </Box>

      <Box sx={{ px: 1.5 }}>
        <Paper sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, mb: 3, bgcolor: 'white', borderRadius: 3 }}>
        <SearchIcon color="action" sx={{ ml: 1 }} />
        <Box sx={{ flex: 1, py: 0.5 }}>
          <Typography variant="body2" color="text.secondary">
            Поиск велосипедов и запчастей
          </Typography>
        </Box>
        <IconButton sx={{ bgcolor: '#0077a5', color: 'white', mr: 1 }} onClick={() => navigate('/catalog')}>
          <FilterListIcon />
        </IconButton>
      </Paper>

      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
        Категории
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', mb: 3, pb: 1 }}>
        {categories.map((category) => (
          <Paper
            key={category.label}
            onClick={() => navigate('/catalog')}
            sx={{
              flex: '0 0 24%',
              minWidth: 88,
              maxWidth: 120,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              borderRadius: 3,
              bgcolor: category.label === 'Велосипеды' ? '#0077a5' : '#eef6ff',
              color: category.label === 'Велосипеды' ? 'white' : 'text.primary',
              cursor: 'pointer',
              minHeight: 102,
            }}
          >
            {category.icon}
            <Typography variant="body2" sx={{ fontWeight: 700, textAlign: 'center', fontSize: '0.8rem' }}>
              {category.label}
            </Typography>
          </Paper>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Мастерские рядом
        </Typography>
        <Button size="small" onClick={() => navigate('/shops')}>
          На карте
        </Button>
      </Box>
      <Card sx={{ borderRadius: 3, mb: 3, overflow: 'hidden' }}>
        <Box sx={{ height: 160, bgcolor: '#d9d9d9' }} />
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            AsiaSport Service
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            2 км · Открыто до 19:00
          </Typography>
          <Button variant="contained" size="small" onClick={() => navigate('/shops')}>
            Подробнее
          </Button>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Рекомендации
        </Typography>
        <Button size="small" onClick={() => navigate('/catalog')}>
          Все
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, mb: 2, ml: -1.5, pr: 1.5, pl: 1.5 }}>
        {mockListings.slice(0, 2).map((item) => (
          <Card
            key={item.id}
            sx={{
              minWidth: 220,
              width: 220,
              borderRadius: 3,
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onClick={() => navigate(`/listing/${item.id}`)}
          >
            <Box sx={{ height: 130, bgcolor: '#d9d9d9' }} />
            <IconButton sx={{ position: 'absolute', top: 10, right: 10, bgcolor: 'white' }}>
              <FavoriteBorderIcon />
            </IconButton>
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
        Отличное состояние
      </Typography>
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
        {mockListings.map((item) => (
          <Card
            key={item.id}
            onClick={() => navigate(`/listing/${item.id}`)}
            sx={{
              borderRadius: 3,
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 280,
            }}
          >
            <Box sx={{ height: 130, bgcolor: '#d9d9d9' }} />
            <IconButton sx={{ position: 'absolute', top: 10, right: 10, bgcolor: 'white' }}>
              <FavoriteBorderIcon />
            </IconButton>
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0077a5', mb: 0.5 }}>
                  {item.price.toLocaleString('ru-RU')} сом
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
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
