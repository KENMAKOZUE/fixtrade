import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, showBack = true }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2, px: 1, bgcolor: 'white', position: 'sticky', top: 0, zIndex: 10, borderBottom: '1px solid #e8ecf3' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {showBack && (
          <IconButton size="small" onClick={() => navigate(-1)} sx={{ bgcolor: '#e7f2fb' }}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>
        )}
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
