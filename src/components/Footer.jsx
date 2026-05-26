import { Box, Container, Typography, Grid, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import logoSrc from '../assets/logovalentia.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';
import { staggerContainer, cardItem, fadeInUp, viewportOptions } from '../lib/animations';

const menuItems = [
  { label: 'Sobre nosotros', href: '#sobre' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reserva tu cita', href: '#reserva' },
  // { label: 'Noticias y Recursos', href: '#noticias' },
  { label: 'Ubicaciones', href: '#ubicaciones' },
  { label: 'Contacto', href: '#contacto' },
];

const locations = [
  { name: 'Sede Principal', address: 'Casablanca, Valparaíso' },
  { name: 'Sede Metropolitana', address: 'Paine, Santiago' },
];

const handleMenuClick = (href) => {
  const element = document.querySelector(href);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => (
  <Box
    component="footer"
    sx={{
      background: 'linear-gradient(135deg, #2a1570 0%, #381d92 60%, #4a2fa8 100%)',
      color: 'white',
      py: 7,
      mt: 8,
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -80,
        right: -80,
        width: 280,
        height: 280,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
        pointerEvents: 'none',
      },
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Grid
        container
        spacing={4}
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {/* Brand */}
        <Grid item xs={12} md={3} component={motion.div} variants={cardItem}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <Box
              component="img"
              src={logoSrc}
              alt="Logo Valentía"
              sx={{
                height: 52,
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                opacity: 0.92,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.01em' }}>
              Centro de Rehabilitación Valentía
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.75, mb: 3 }}>
            Tratamiento profesional para adicciones en Santiago. Atención personalizada, terapias integrales y apoyo 24/7.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {[
              {
                Icon: FacebookIcon,
                url: 'https://www.facebook.com/p/Centro-de-rehabilitaci%C3%B3n-valentia-61576555484633/',
                label: 'Facebook',
              },
              {
                Icon: InstagramIcon,
                url: 'https://www.instagram.com/centroderehabilitacionvalentia/',
                label: 'Instagram',
              },
            ].map(({ Icon, url, label }) => (
              <IconButton
                key={label}
                component={motion.button}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                aria-label={label}
                onClick={() => window.open(url, '_blank')}
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.12)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Links */}
        <Grid item xs={12} md={3} component={motion.div} variants={cardItem}>
          <Typography variant="body1" sx={{ fontWeight: 700, mb: 2.5, fontSize: '0.95rem', letterSpacing: 0.5 }}>
            ENLACES
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                component="button"
                onClick={() => handleMenuClick(item.href)}
                sx={{
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'white' },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Locations */}
        <Grid item xs={12} md={3} component={motion.div} variants={cardItem}>
          <Typography variant="body1" sx={{ fontWeight: 700, mb: 2.5, fontSize: '0.95rem', letterSpacing: 0.5 }}>
            NUESTRAS SEDES
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {locations.map((loc) => (
              <Box key={loc.name} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 18, mt: 0.3, opacity: 0.7, flexShrink: 0 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.3 }}>
                    {loc.name}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.75 }}>
                    {loc.address}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Hours */}
        <Grid item xs={12} md={3} component={motion.div} variants={cardItem}>
          <Typography variant="body1" sx={{ fontWeight: 700, mb: 2.5, fontSize: '0.95rem', letterSpacing: 0.5 }}>
            HORARIOS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box>
              <Typography variant="body2" sx={{ opacity: 0.7, mb: 0.3 }}>
                Todos los días
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                Abierto las 24 horas
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        component={motion.div}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ borderTop: '1px solid rgba(255,255,255,0.12)', mt: 5, pt: 3, textAlign: 'center' }}
      >
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} Centro de Rehabilitación Valentía. Todos los derechos reservados.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
