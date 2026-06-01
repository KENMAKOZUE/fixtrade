import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, ToggleButtonGroup, ToggleButton, Divider, Stack } from '@mui/material';

export const Auth: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <Box sx={{ pt: 4, pb: 12, px: 1.5 }}>
      <Paper sx={{ p: 3, borderRadius: 3, bgcolor: '#f7f9fc' }}>
        <Box sx={{ width: 56, height: 56, borderRadius: 2, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <Typography sx={{ color: 'white', fontWeight: 700 }}>🚲</Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {mode === 'login' ? 'Вход в FixTrade' : 'Создание аккаунта'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {mode === 'login'
            ? 'Войдите, чтобы безопасно покупать и продавать велотовары'
            : 'Присоединяйтесь к сообществу велосипедистов'}
        </Typography>
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={(_, value) => value && setMode(value)}
          fullWidth
          sx={{ mb: 3, borderRadius: 3, bgcolor: 'white' }}
        >
          <ToggleButton value="login">Войти</ToggleButton>
          <ToggleButton value="register">Регистрация</ToggleButton>
        </ToggleButtonGroup>
        <Stack spacing={2}>
          {mode === 'register' && (
            <TextField fullWidth label="Имя и фамилия" placeholder="Тилек Бактыбеков" />
          )}
          <TextField fullWidth label="Email или телефон" placeholder="Введите email или номер" />
          <TextField fullWidth label="Пароль" type="password" placeholder="Пароль" />
          {mode === 'register' && <TextField fullWidth label="Повторите пароль" type="password" placeholder="Подтвердите пароль" />}
          <Button variant="contained" size="large" fullWidth>
            {mode === 'login' ? 'Войти в аккаунт' : 'Создать аккаунт'}
          </Button>
        </Stack>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
          Или зарегистрироваться через
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" fullWidth>Google</Button>
          <Button variant="outlined" fullWidth>Apple</Button>
        </Stack>
      </Paper>
    </Box>
  );
};
