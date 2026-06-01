import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, Avatar, Button, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PageHeader } from '../components/PageHeader';

const shops = [
  { id: '1', name: 'Asia Sport', logo: 'AS' },
  { id: '2', name: 'Velopro', logo: 'V' },
  { id: '3', name: 'Gergert sport', logo: 'G' },
  { id: '4', name: 'Jetim.KG', logo: 'J' },
];

export const NearbyShops: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc' }}>
      <PageHeader title="Мастерские рядом" />

      <Box sx={{ position: 'relative', height: 280, overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(0, 118, 255, 0.18), transparent 28%), radial-gradient(circle at 70% 10%, rgba(0, 118, 255, 0.14), transparent 22%), #dbefff',
          }}
        />
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <img
            src="https://images.unsplash.com/photo-1513243752041-5f15404e3b27?auto=format&fit=crop&w=1200&q=80"
            alt="Map placeholder"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{ position: 'relative', p: 2, display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="subtitle2" color="text.secondary">
              Карта Bishkek
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#0077a5', transform: 'translateX(40px) translateY(20px)' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#0077a5', transform: 'translateX(60px) translateY(140px)' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#0077a5', transform: 'translateX(180px) translateY(90px)' }} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: 1.5, pt: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Мастерские рядом
        </Typography>

        <Stack spacing={2}>
          {shops.map((shop) => (
            <Paper key={shop.id} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: 'white', borderRadius: 3 }}>
              <Avatar sx={{ width: 56, height: 56, bgcolor: '#e3f1ff', color: '#0077a5', fontWeight: 700 }}>
                {shop.logo}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {shop.name}
                </Typography>
              </Box>
              <Button variant="contained" color="primary" onClick={() => navigate('/support')}>
                Перейти
              </Button>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
