import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardItem, viewportOptions } from '../lib/animations';

const pillars = [
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: 44 }} />,
    title: 'Atención Personalizada',
    description:
      'Creamos planes de rehabilitación únicos para cada persona, adaptados a sus necesidades específicas y objetivos individuales.',
    accent: '#2D3748',
    bg: '#EDF2F7',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 44 }} />,
    title: 'Equipo Multidisciplinario',
    description:
      'Contamos con especialistas en diversas áreas trabajando de forma coordinada para tu recuperación integral.',
    accent: '#059669',
    bg: '#ECFDF5',
  },
  {
    icon: <HomeIcon sx={{ fontSize: 44 }} />,
    title: 'Ambiente Acogedor',
    description:
      'Ofrecemos un espacio cómodo y cálido donde te sentirás seguro y apoyado durante todo tu proceso.',
    accent: '#D97706',
    bg: '#FFFBEB',
  },
];

const MissionSection = () => (
  <Box id="sobre" sx={{ py: 12, bgcolor: '#F7F8FA' }}>
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
          <TrendingUpIcon sx={{ fontSize: 42, color: '#2D3748' }} />
        </Box>
        <Typography
          variant="overline"
          sx={{ display: 'block', color: '#2D3748', fontWeight: 700, fontSize: '0.82rem', letterSpacing: 3, mb: 1.5 }}
        >
          NUESTRA MISIÓN
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 700, mb: 2.5, color: '#2D3748', fontSize: { xs: '1.9rem', md: '2.75rem' } }}
        >
          Avanzamos juntos hacia tu bienestar integral
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '660px', mx: 'auto', color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75 }}
        >
          Nuestra misión es guiarte hacia una recuperación plena, basada en valores de empatía, respeto y compromiso
        </Typography>
      </Box>

      {/* Pillars */}
      <Grid
        container
        spacing={3}
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {pillars.map((pillar) => (
          <Grid item xs={12} md={4} key={pillar.title}>
            <Box
              component={motion.div}
              variants={cardItem}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
              sx={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  border: '1px solid rgba(45,55,72,0.07)',
                  boxShadow: '0 2px 12px rgba(45,55,72,0.06)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: '0 14px 36px rgba(45,55,72,0.14)' },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '16px',
                      bgcolor: pillar.bg,
                      color: pillar.accent,
                      mb: 3,
                    }}
                  >
                    {pillar.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1.5, color: '#2D3748' }}
                  >
                    {pillar.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {pillar.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 24/7 banner */}
      <Box
        component={motion.div}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ mt: 6 }}
      >
        <Box
          sx={{
            p: { xs: 4, md: 5 },
            background: 'linear-gradient(135deg, #2D3748 0%, #4A5568 100%)',
            borderRadius: 3,
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -40,
              right: -40,
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Box sx={{ p: 1.2, bgcolor: 'rgba(255,255,255,0.15)', borderRadius: '12px' }}>
                <AccessTimeIcon sx={{ fontSize: 32 }} />
              </Box>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              Apoyo Continuo 24/7
            </Typography>
            <Typography
              variant="body1"
              sx={{ opacity: 0.9, maxWidth: '720px', mx: 'auto', lineHeight: 1.75 }}
            >
              Estamos comprometidos con tu bienestar las 24 horas del día, los 7 días de la semana.
              Nuestro equipo está siempre disponible para brindarte el apoyo que necesitas en cada momento.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default MissionSection;
