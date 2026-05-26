import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardItem, viewportOptions } from '../lib/animations';

const news = [
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
    category: 'Salud Mental',
    categoryColor: '#2D3748',
    categoryBg: '#EDF2F7',
    title: 'La importancia del apoyo familiar en la recuperación',
    date: '15 Ene 2025',
    excerpt:
      'Descubre cómo el apoyo de la familia es fundamental en el proceso de rehabilitación y recuperación integral.',
  },
  {
    icon: <TipsAndUpdatesIcon sx={{ fontSize: 40 }} />,
    category: 'Recursos',
    categoryColor: '#D97706',
    categoryBg: '#FFFBEB',
    title: 'Técnicas de mindfulness para el manejo del estrés',
    date: '10 Ene 2025',
    excerpt:
      'Aprende técnicas efectivas de atención plena que pueden ayudarte en tu proceso de recuperación diaria.',
  },
  {
    icon: <LocalLibraryIcon sx={{ fontSize: 40 }} />,
    category: 'Educación',
    categoryColor: '#059669',
    categoryBg: '#ECFDF5',
    title: 'Entendiendo el proceso de rehabilitación',
    date: '5 Ene 2025',
    excerpt:
      'Una guía completa sobre las diferentes etapas del proceso de rehabilitación y qué esperar en cada una.',
  },
];

const NewsSection = () => (
  <Box id="noticias" sx={{ py: 12, bgcolor: 'white' }}>
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
          <ArticleIcon sx={{ fontSize: 40, color: '#2D3748' }} />
        </Box>
        <Typography
          variant="overline"
          sx={{ display: 'block', color: '#2D3748', fontWeight: 700, fontSize: '0.82rem', letterSpacing: 3, mb: 1.5 }}
        >
          NOTICIAS Y RECURSOS
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 700, mb: 2.5, color: '#2D3748', fontSize: { xs: '1.9rem', md: '2.75rem' } }}
        >
          Noticias y Recursos
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '620px', mx: 'auto', color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75 }}
        >
          Mantente informado con nuestras últimas publicaciones y recursos educativos
        </Typography>
      </Box>

      {/* Cards */}
      <Grid
        container
        spacing={3}
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {news.map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
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
                  cursor: 'pointer',
                  borderRadius: 3,
                  border: '1px solid rgba(45,55,72,0.07)',
                  boxShadow: '0 2px 12px rgba(45,55,72,0.06)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: '0 16px 40px rgba(45,55,72,0.14)' },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3.5 }}>
                  {/* Icon with colored bg */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: '12px',
                      bgcolor: item.categoryBg,
                      color: item.categoryColor,
                      mb: 2.5,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        bgcolor: item.categoryBg,
                        color: item.categoryColor,
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        height: 22,
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon sx={{ fontSize: 13, color: 'text.disabled' }} />
                      <Typography variant="caption" sx={{ color: 'text.disabled', fontSize: '0.72rem' }}>
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1.5, color: '#2D3748', lineHeight: 1.4, fontSize: '1rem' }}
                  >
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                    {item.excerpt}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default NewsSection;
