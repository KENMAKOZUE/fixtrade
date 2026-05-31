import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface CharacteristicsStepProps {
  value: Record<string, string>;
  onChange: (value: Record<string, string>) => void;
}

export const CharacteristicsStep: React.FC<CharacteristicsStepProps> = ({ value, onChange }) => {
  const [key, setKey] = useState('');
  const [val, setVal] = useState('');

  const handleAdd = () => {
    if (key.trim() && val.trim()) {
      onChange({
        ...value,
        [key]: val,
      });
      setKey('');
      setVal('');
    }
  };

  const handleDelete = (k: string) => {
    const newChars = { ...value };
    delete newChars[k];
    onChange(newChars);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Добавьте характеристики
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 2, mb: 3 }}>
        <TextField
          label="Параметр"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Например: Цвет"
        />
        <TextField
          label="Значение"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Например: Черный"
        />
        <Button variant="contained" onClick={handleAdd}>
          Добавить
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {Object.entries(value).map(([k, v]) => (
          <Card key={k} sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                {k}
              </Typography>
              <Typography variant="body1">{v}</Typography>
            </Box>
            <Button
              size="small"
              color="error"
              onClick={() => handleDelete(k)}
              startIcon={<DeleteIcon />}
            >
              Удалить
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
