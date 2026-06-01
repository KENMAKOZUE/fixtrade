import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { PageHeader } from '../components/PageHeader';

export const Favorites: React.FC = () => {
  return (
    <Box sx={{ pb: 12, bgcolor: '#f7f9fc' }}>
      <PageHeader title="Избранное" />
      <Box sx={{ px: 1.5, pt: 3 }}>
        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: 'white', minHeight: '60vh' }}>
          <Typography variant="body1" color="text.secondary">
            Здесь будут сохраненные объявления.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};
