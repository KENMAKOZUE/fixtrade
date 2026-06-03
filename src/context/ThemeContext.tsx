import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Типы для нашего контекста
type ThemeContextType = {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
};

// Создаем сам контекст
const ThemeContext = createContext<ThemeContextType>({ 
  mode: 'light', 
  toggleTheme: () => {} 
});

export const useAppTheme = () => useContext(ThemeContext);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // При запуске проверяем, есть ли сохраненная тема в localStorage. Если нет — ставим светлую.
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : 'light';
  });

  // Функция переключения
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('app-theme', newMode); // Сохраняем выбор!
      return newMode;
    });
  };

  // Настраиваем палитру MUI под наш дизайн
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#0077a5' },
      background: {
        default: mode === 'light' ? '#f4f7fb' : '#121212', // Фон приложения
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',   // Фон карточек
      },
      text: {
        primary: mode === 'light' ? '#1a1a1a' : '#ffffff',
        secondary: mode === 'light' ? '#8b9eb0' : '#a0aab5',
      }
    },
  }), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Эта штука автоматически красит body в background.default */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};