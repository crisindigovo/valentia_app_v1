import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import SportsIcon from '@mui/icons-material/Sports';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpaIcon from '@mui/icons-material/Spa';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { staggerContainer, cardItem, fadeInUp, viewportOptions } from '../lib/animations';

const services = [
  {
    icon: <SportsIcon sx={{ fontSize: 52, color: 'white' }} />,
    title: 'Deportes',
    description: 'Rehabilitación deportiva especializada para recuperación de lesiones y mejora del rendimiento físico.',
    color: '#0284C7',
    gradient: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%)',
  },
  {
    icon: <AccessibilityNewIcon sx={{ fontSize: 52, color: 'white' }} />,
    title: 'Rehabilitación Ocupacional',
    description: 'Terapia ocupacional para recuperar y mejorar las habilidades necesarias en tu vida diaria y laboral.',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 52, color: 'white' }} />,
    title: 'Terapia Psicológica',
    description: 'Apoyo psicológico integral para el manejo de adicciones, ansiedad, depresión y otros desafíos emocionales.',
    color: '#D97706',
    gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
  },
  {
    icon: <SpaIcon sx={{ fontSize: 52, color: 'white' }} />,
    title: 'Terapias Complementarias',
    description: 'Terapias alternativas y complementarias para fortalecer tu proceso de recuperación integral.',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
  },
];

const handleScroll = (href) => {
  const element = document.querySelector(href);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const ServicesSection = () => (
  <Box id="servicios" sx={{ py: 12, bgcolor: 'white' }}>
    <Container maxWidth="lg">
      {/* Header */}
      <Box
        component={motion.div}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mb: 8 }}
      >
        <Typography
          variant="overline"
          sx={{ color: '#381d92', fontWeight: 700, fontSize: '0.82rem', letterSpacing: 3 }}
        >
          NUESTROS SERVICIOS
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 700, mb: 2.5, mt: 1.5, color: '#381d92', fontSize: { xs: '1.9rem', md: '2.75rem' } }}
        >
          Tratamientos Especializados
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '620px', mx: 'auto', color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75 }}
        >
          Ofrecemos una amplia gama de servicios diseñados para tu recuperación completa
        </Typography>
      </Box>

      {/* Cards grid */}
      <Grid
        container
        spacing={3}
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <Box
              component={motion.div}
              variants={cardItem}
              whileHover={{ y: -10, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
              sx={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: 3,
                  border: '1px solid rgba(56,29,146,0.07)',
                  boxShadow: '0 2px 12px rgba(56,29,146,0.07)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: '0 16px 40px rgba(56,29,146,0.16)' },
                }}
              >
                {/* Icon header */}
                <Box
                  sx={{
                    background: service.gradient,
                    p: 3.5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 148,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -20,
                      right: -20,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    {service.icon}
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1.5, color: '#381d92', fontSize: '1rem' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* CTA */}
      <Box
        component={motion.div}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mt: 7 }}
      >
        <Button
          component={motion.button}
          whileHover={{ y: -3, boxShadow: '0 10px 28px rgba(56,29,146,0.30)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => handleScroll('#contacto')}
          sx={{
            bgcolor: '#381d92',
            px: 5,
            py: 1.6,
            fontSize: '1rem',
            fontWeight: 700,
            borderRadius: '100px',
            boxShadow: '0 4px 16px rgba(56,29,146,0.25)',
            '&:hover': { bgcolor: '#2a1570' },
          }}
        >
          Conoce más sobre nuestros servicios
        </Button>
      </Box>
    </Container>
  </Box>
);

export default ServicesSection;
