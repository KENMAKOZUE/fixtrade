import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

interface PriceStepProps {
  value: number;
  onChange: (value: number) => void;
}

export const PriceStep: React.FC<PriceStepProps> = ({ value, onChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Установите цену
      </Typography>
      <TextField
        type="number"
        label="Цена"
        value={value || ''}
        onChange={(e) => {
          const val = Number(e.target.value);
          if (val >= 0) onChange(val);
        }}
        variant="outlined"
        sx={{ maxWidth: 300 }}
      />
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
        Введите цену в рублях
      </Typography>
    </Box>
  );
};
