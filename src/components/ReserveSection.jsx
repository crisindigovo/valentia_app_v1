import { Box, Container, Typography, Button } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { fadeInUp, viewportOptions } from '../lib/animations';

const handleScrollToContact = () => {
  const el = document.querySelector('#contacto');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const ReserveSection = () => (
  <Box id="reserva" sx={{ py: 12, bgcolor: 'white' }}>
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
        <Box
          sx={{
            display: 'inline-flex',
            p: 1.8,
            borderRadius: '50%',
            bgcolor: '#EDF2F7',
            mb: 2.5,
          }}
        >
          <EventAvailableIcon sx={{ fontSize: 40, color: '#2D3748' }} />
        </Box>
        <Typography
          variant="overline"
          sx={{ display: 'block', color: '#2D3748', fontWeight: 700, fontSize: '0.82rem', letterSpacing: 3, mb: 1.5 }}
        >
          RESERVA TU CITA
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 700, mb: 2.5, color: '#2D3748', fontSize: { xs: '1.9rem', md: '2.75rem' } }}
        >
          Agenda tu Cita
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '600px', mx: 'auto', color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75 }}
        >
          Estamos aquí para ayudarte. Reserva tu consulta de evaluación sin compromiso
        </Typography>
      </Box>

      {/* CTA Banner */}
      <Box
        component={motion.div}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, #2D3748 0%, #4A5568 100%)',
            borderRadius: 3,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -50,
              right: -50,
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              Primera Consulta Gratuita
            </Typography>
            <Typography variant="body1" sx={{ mb: 3.5, opacity: 0.9, maxWidth: '520px', mx: 'auto' }}>
              Agenda tu evaluación sin costo. Escríbenos o completa el formulario de contacto y nos ponemos en contacto contigo.
            </Typography>
            <Button
              component={motion.button}
              whileHover={{ y: -3, boxShadow: '0 12px 28px rgba(0,0,0,0.22)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={handleScrollToContact}
              sx={{
                bgcolor: 'white',
                color: '#2D3748',
                px: 5,
                py: 1.5,
                fontWeight: 700,
                borderRadius: '100px',
                fontSize: '1rem',
                '&:hover': { bgcolor: '#EDF2F7' },
              }}
            >
              Ir a Contacto
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default ReserveSection;
