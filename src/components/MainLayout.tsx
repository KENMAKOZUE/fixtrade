import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';

const navItems = [
  { label: 'Главная', icon: <HomeIcon />, path: '/' },
  { label: 'Каталог', icon: <SearchIcon />, path: '/catalog' },
  { label: 'Добавить', icon: <AddBoxIcon />, path: '/add-listing' },
  { label: 'Чаты', icon: <ChatIcon />, path: '/chats' },
  { label: 'Профиль', icon: <PersonIcon />, path: '/profile' },
];

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const showBottomNav = !pathname.startsWith('/auth');
  const activeIndex = navItems.findIndex((item) => item.path === pathname);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f7f9fc' }}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ px: 0, pb: showBottomNav ? 10 : 0 }}>
        {children}
      </Container>
      {showBottomNav && (
        <Paper
          elevation={8}
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}
        >
          <BottomNavigation
            showLabels
            value={activeIndex >= 0 ? activeIndex : 0}
            onChange={(_, newValue) => {
              navigate(navItems[newValue].path);
            }}
          >
            {navItems.map((item) => (
              <BottomNavigationAction
                key={item.path}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </BottomNavigation>
        </Paper>
      )}
    </Box>
  );
};
