import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import logoSrc from '../assets/logovalentia.png';

const menuItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reserva', href: '#reserva' },
  // { label: 'Noticias', href: '#noticias' },
  { label: 'Ubicaciones', href: '#ubicaciones' },
  { label: 'Contacto', href: '#contacto' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { isAdmin, user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMenuClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2.5, py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box component="img" src={logoSrc} alt="Logo Valentía" sx={{ height: 38, width: 'auto' }} />
          <Box>
            <Typography sx={{ fontWeight: 800, color: '#2D3748', fontSize: '0.95rem', lineHeight: 1.2 }}>
              Valentía
            </Typography>
            <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', lineHeight: 1 }}>
              Centro de Rehabilitación
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={() => setMobileOpen(false)} size="small" sx={{ color: 'text.secondary' }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ px: 1, pt: 1, flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleMenuClick(item.href)}
              sx={{
                py: 1.3,
                px: 2,
                borderRadius: 2,
                mb: 0.5,
                '&:hover': { bgcolor: '#F7F8FA', color: '#2D3748' },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ px: 2.5, py: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => { setMobileOpen(false); navigate(isAdmin ? '/admin' : '/login'); }}
          startIcon={isAdmin ? <AdminPanelSettingsIcon /> : <LoginIcon />}
          sx={{ borderRadius: 2, bgcolor: '#2D3748', '&:hover': { bgcolor: '#1A202C' } }}
        >
          {isAdmin ? 'Panel Admin' : 'Iniciar sesión'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        component={motion.header}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        sx={{
          bgcolor: 'white',
          boxShadow: scrolled ? '0 2px 20px rgba(45,55,72,0.10)' : '0 1px 0 rgba(45,55,72,0.06)',
          transition: 'box-shadow 0.3s',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 0.5 }}>
            {/* Logo */}
            <Box
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Box
                component="img"
                src={logoSrc}
                alt="Logo Valentía"
                sx={{ height: { xs: 42, md: 48 }, width: 'auto', display: 'block' }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: '#2D3748',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                Centro de Rehabilitación Valentía
              </Typography>
            </Box>

            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Tooltip title={isAdmin ? 'Panel Admin' : 'Iniciar sesión'}>
                  <IconButton color="primary" onClick={() => navigate(isAdmin ? '/admin' : '/login')}>
                    {isAdmin ? <AdminPanelSettingsIcon /> : <LoginIcon />}
                  </IconButton>
                </Tooltip>
                <IconButton color="primary" aria-label="open drawer" edge="start" onClick={() => setMobileOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    component={motion.button}
                    whileHover={{ color: '#2D3748' }}
                    onClick={() => handleMenuClick(item.href)}
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      fontSize: '0.88rem',
                      px: 1.5,
                      borderRadius: '8px',
                      '&:hover': { color: '#2D3748', bgcolor: '#F7F8FA' },
                      transition: 'all 0.2s',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Box sx={{ ml: 1 }}>
                  <Tooltip title={isAdmin ? 'Panel Admin' : user ? 'Mi cuenta' : 'Iniciar sesión'}>
                    <IconButton
                      color="primary"
                      onClick={() => navigate(isAdmin ? '/admin' : '/login')}
                      sx={{ bgcolor: '#EDF2F7', '&:hover': { bgcolor: '#CBD5E0' } }}
                    >
                      {isAdmin ? <AdminPanelSettingsIcon /> : <LoginIcon />}
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
