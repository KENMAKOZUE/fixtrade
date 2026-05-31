import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface PhotoStepProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export const PhotoStep: React.FC<PhotoStepProps> = ({ value, onChange }) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileNames = Array.from(files).map((file) => file.name);
      onChange([...value, ...fileNames]);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Загрузите фотографии
      </Typography>
      <Box
        sx={{
          border: '2px dashed #ccc',
          borderRadius: 2,
          p: 4,
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#f5f5f5' },
        }}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          id="photo-upload"
        />
        <label htmlFor="photo-upload" style={{ cursor: 'pointer', display: 'block' }}>
          <CloudUploadIcon sx={{ fontSize: 48, color: '#999' }} />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Нажмите или перетащите фото
          </Typography>
        </label>
      </Box>
      {value.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Загруженные фото: {value.length}</Typography>
        </Box>
      )}
    </Box>
  );
};
