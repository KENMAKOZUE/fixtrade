import React from 'react';
import { Box, Typography, Avatar, Paper, TextField, Button } from '@mui/material';
import { PageHeader } from '../components/PageHeader';

export const ProfileEdit: React.FC = () => {
  return (
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc' }}>
      <PageHeader title="Редактирование" />
      <Box sx={{ px: 1.5, pt: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Avatar sx={{ width: 88, height: 88 }}>Т</Avatar>
        </Box>
        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: 'white' }}>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                Имя и фамилия
              </Typography>
              <TextField fullWidth value="Тилек Бактыбеков" size="small" />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                Телефон
              </Typography>
              <TextField fullWidth value="+996(777)777-777" size="small" />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                Email
              </Typography>
              <TextField fullWidth value="tilek.baktybekov@example.com" size="small" />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                Город
              </Typography>
              <TextField fullWidth value="Бишкек" size="small" />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                О себе
              </Typography>
              <TextField fullWidth value="Люблю велики" size="small" />
            </Box>
          </Box>
          <Button variant="contained" fullWidth sx={{ mt: 3 }}>
            Сохранить изменения
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};
