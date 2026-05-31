import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface CategoryStepProps {
  value: string;
  onChange: (value: string) => void;
}
const categories = ['Шоссейные', 'MTB', 'BMX', 'Fixed Gear', 'Гревел', 'Городские', 'Для женщин', 'Запчасти', 'Аксессуары', 'Инструменты'];

export const CategoryStep: React.FC<CategoryStepProps> = ({ value, onChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Выберите категорию
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={value === category ? 'contained' : 'outlined'}
            onClick={() => onChange(category)}
            fullWidth
          >
            {category}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
