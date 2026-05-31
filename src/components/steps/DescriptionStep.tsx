import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

interface DescriptionStepProps {
  value: string;
  onChange: (value: string) => void;
}

export const DescriptionStep: React.FC<DescriptionStepProps> = ({ value, onChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Напишите описание
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={6}
        placeholder="Опишите товар или услугу..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
      />
    </Box>
  );
};
