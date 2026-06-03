import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, Typography } from '@mui/material';

// Импортируем контурные (Outlined) версии иконок, как на макете
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search'; // У поиска стандартная иконка уже контурная
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const navItems = [
  { label: 'Главная', icon: HomeOutlinedIcon, path: '/' },
  { label: 'Каталог', icon: SearchIcon, path: '/catalog' },
  { label: '', icon: AddIcon, path: '/add-listing', isSpecial: true }, // Центральная кнопка без текста
  { label: 'Чаты', icon: ChatBubbleOutlineOutlinedIcon, path: '/chats' },
  { label: 'Профиль', icon: PersonOutlinedIcon, path: '/profile' },
];

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  
  // Прячем меню на экранах авторизации
  const showBottomNav = !pathname.startsWith('/auth');

  // Функция для проверки активного таба
  const isTabActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f7f9fc' }}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ px: 0, pb: showBottomNav ? 10 : 0 }}>
        {children}
      </Container>
      
      {showBottomNav && (
        <Paper
          elevation={0}
          sx={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            zIndex: 1000,
            bgcolor: 'white',
            borderTop: '1px solid #f0f5fa',
            pb: 'env(safe-area-inset-bottom)' // Учитывает полоску на iPhone
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 70, px: 1 }}>
            {navItems.map((item, index) => {
              const active = isTabActive(item.path);
              const color = active ? '#0077a5' : '#8b9eb0';

              // Рендер центральной кнопки "Добавить"
              if (item.isSpecial) {
                return (
                  <Box 
                    key={index} 
                    onClick={() => navigate(item.path)} 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      cursor: 'pointer', 
                      flex: 1
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 46, 
                        height: 46, 
                        borderRadius: '50%', 
                        border: `2.5px solid ${color}`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                        '&:hover': { bgcolor: '#f0f5fa' }
                      }}
                    >
                      <item.icon sx={{ color, fontSize: 32 }} />
                    </Box>
                  </Box>
                );
              }

              // Рендер остальных обычных кнопок
              return (
                <Box 
                  key={index} 
                  onClick={() => navigate(item.path)} 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    cursor: 'pointer', 
                    flex: 1,
                    minWidth: 64,
                    transition: 'all 0.2s',
                  }}
                >
                  <item.icon sx={{ color, mb: 0.3, fontSize: 28 }} />
                  <Typography 
                    sx={{ 
                      fontSize: '0.65rem', 
                      fontWeight: 700, 
                      color 
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Paper>
      )}
    </Box>
  );
};