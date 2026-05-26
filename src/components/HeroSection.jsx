import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import terraza from '../assets/terraza.jpeg';

const stats = [
  { icon: <PeopleAltIcon sx={{ fontSize: 22 }} />, value: '+200', label: 'Pacientes' },
  // { icon: <EmojiEventsIcon sx={{ fontSize: 22 }} />, value: '+10', label: 'Años de experiencia' },
  { icon: <StarIcon sx={{ fontSize: 22 }} />, value: '5★', label: 'Calificación' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const HeroSection = () => {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '540px', md: '660px' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${terraza})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Subtle dark overlay for text readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Background texture */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 18% 40%, rgba(255,255,255,0.07) 0%, transparent 48%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%), radial-gradient(circle at 60% 80%, rgba(74,85,104,0.35) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Animated orb 1 */}
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          right: { xs: -80, md: 60 },
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: 260, md: 440 },
          height: { xs: 260, md: 440 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Animated orb 2 — smaller, top-left */}
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        sx={{
          position: 'absolute',
          left: { xs: -60, md: -30 },
          bottom: { xs: -60, md: -40 },
          width: { xs: 180, md: 300 },
          height: { xs: 180, md: 300 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grid pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ maxWidth: '820px' }}
        >
          {/* Heading */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.75rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
              }}
            >
              En Valentía te guiamos a{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                superar desafíos
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 2,
                    left: 0,
                    right: 0,
                    height: 4,
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.35)',
                  }}
                />
              </Box>{' '}
              físicos y emocionales
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              sx={{
                mb: 5,
                opacity: 0.9,
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.7,
                maxWidth: '680px',
              }}
            >
              Atención personalizada y apoyo integral para transformar tu vida, con un equipo
              multidisciplinario comprometido con tu bienestar.
            </Typography>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 7 }}>
              <Button
                component={motion.button}
                whileHover={{ y: -3, boxShadow: '0 12px 28px rgba(0,0,0,0.25)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => handleScroll('#sobre')}
                sx={{
                  bgcolor: 'white',
                  color: '#2D3748',
                  px: 4,
                  py: 1.6,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '100px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                  '&:hover': { bgcolor: '#EDF2F7' },
                }}
              >
                Descubre más
              </Button>

              <Button
                component={motion.button}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                variant="outlined"
                size="large"
                onClick={() => handleScroll('#contacto')}
                sx={{
                  borderColor: 'rgba(255,255,255,0.55)',
                  color: 'white',
                  px: 4,
                  py: 1.6,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '100px',
                  backdropFilter: 'blur(6px)',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.85)',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Contáctanos
              </Button>
            </Box>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, md: 4 },
                flexWrap: 'wrap',
                pt: 3,
                borderTop: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              {stats.map((stat) => (
                <Box key={stat.label} sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <Box sx={{ opacity: 0.75 }}>{stat.icon}</Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: '1.2rem', lineHeight: 1.1 }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ fontSize: '0.72rem', opacity: 0.7, letterSpacing: 0.5 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
