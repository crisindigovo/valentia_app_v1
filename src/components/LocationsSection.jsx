import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardItem, viewportOptions } from '../lib/animations';

const LOCATIONS = [
  {
    id: 1,
    name: 'Sede Principal',
    badge: 'Sede 1',
    city: 'Casablanca, Valparaíso',
    phone: '+56 9 4021 0310',
    hours: 'Abierto las 24 horas · Todos los días',
    mapsUrl: 'https://www.google.com/maps?vet=10CAAQoqAOahcKEwjIg-PwjNeUAxUAAAAAHQAAAAAQIQ..i&rlz=1C1ONGR_enCL1186CL1186&pvq=Cg0vZy8xMXh0MjlucWhsIigKImNlbnRybyBkZSByZWhhYmlsaXRhY2nDs24gdmFsZW50aWEQAhgD&lqi=CiJjZW50cm8gZGUgcmVoYWJpbGl0YWNpw7NuIHZhbGVudGlhSPKz6aTkvICACFo0EAAQARACEAMYABgBGAIYAyIiY2VudHJvIGRlIHJlaGFiaWxpdGFjacOzbiB2YWxlbnRpYZIBFXJlaGFiaWxpdGF0aW9uX2NlbnRlcg&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=cl&sa=X&ftid=0x966267002e434d07:0x7e92b65eb8a9d3bc',
    gradient: 'linear-gradient(135deg, #381d92 0%, #5b3cc4 100%)',
    color: '#381d92',
    hoverColor: '#2d1778',
  },
  {
    id: 2,
    name: 'Sede Metropolitana',
    badge: 'Sede 2',
    city: 'Paine, Santiago',
    phone: '+56 9 7212 4604',
    hours: 'Abierto las 24 horas · Todos los días',
    mapsUrl: 'https://www.google.com/maps?vet=10CAAQoqAOahcKEwjIg-PwjNeUAxUAAAAAHQAAAAAQDA..i&rlz=1C1ONGR_enCL1186CL1186&pvq=Cg0vZy8xMXlkMTRyaGI5IigKImNlbnRybyBkZSByZWhhYmlsaXRhY2nDs24gdmFsZW50aWEQAhgD&lqi=CiJjZW50cm8gZGUgcmVoYWJpbGl0YWNpw7NuIHZhbGVudGlhSMn6rpKwvYCACFo0EAAQARACEAMYABgBGAIYAyIiY2VudHJvIGRlIHJlaGFiaWxpdGFjacOzbiB2YWxlbnRpYZIBFXJlaGFiaWxpdGF0aW9uX2NlbnRlcg&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=cl&sa=X&ftid=0x96633dd3de5d3b63:0x7c399660edc98b89',
    gradient: 'linear-gradient(135deg, #5b3cc4 0%, #8f70d8 100%)',
    color: '#5b3cc4',
    hoverColor: '#4a2fa8',
  },
];

const LocationsSection = () => (
  <Box id="ubicaciones" sx={{ py: 12, bgcolor: '#F8F7FF' }}>
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
          DÓNDE ESTAMOS
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 700, mt: 1.5, mb: 2, color: '#381d92', fontSize: { xs: '1.9rem', md: '2.75rem' } }}
        >
          Nuestras Ubicaciones
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '520px', mx: 'auto', color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75 }}
        >
          Encuéntranos en nuestras dos sedes en Santiago
        </Typography>
      </Box>

      {/* Cards */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {LOCATIONS.map((loc) => (
          <Grid item xs={12} md={6} key={loc.id}>
            <Box
              component={motion.div}
              variants={cardItem}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
              sx={{ height: '100%' }}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: '1px solid rgba(56,29,146,0.10)',
                  height: '100%',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: '0 20px 48px rgba(56,29,146,0.16)' },
                }}
              >
                {/* Colored header */}
                <Box
                  sx={{
                    background: loc.gradient,
                    px: 3,
                    py: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      p: 0.8,
                      bgcolor: 'rgba(255,255,255,0.18)',
                      borderRadius: '10px',
                      display: 'flex',
                    }}
                  >
                    <LocationOnIcon sx={{ color: 'white', fontSize: 24 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, lineHeight: 1.2 }}>
                      {loc.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                      Centro de Rehabilitación Valentía
                    </Typography>
                  </Box>
                  <Chip
                    label={loc.badge}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      border: '1px solid rgba(255,255,255,0.3)',
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 1.5, mb: 2, alignItems: 'center' }}>
                    <LocationOnIcon sx={{ color: loc.color, fontSize: 20, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {loc.city}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1.5, mb: 2, alignItems: 'flex-start' }}>
                    <AccessTimeIcon sx={{ color: loc.color, fontSize: 20, mt: 0.2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {loc.hours}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1.5, mb: 3, alignItems: 'center' }}>
                    <PhoneIcon sx={{ color: loc.color, fontSize: 20, flexShrink: 0 }} />
                    <Typography
                      component="a"
                      href={`tel:${loc.phone.replace(/\s/g, '')}`}
                      variant="body2"
                      sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: loc.color } }}
                    >
                      {loc.phone}
                    </Typography>
                  </Box>

                  <Button
                    component={motion.button}
                    whileHover={{ y: -2, boxShadow: `0 8px 20px ${loc.color}44` }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    variant="contained"
                    fullWidth
                    startIcon={<DirectionsIcon />}
                    onClick={() => window.open(loc.mapsUrl, '_blank', 'noopener,noreferrer')}
                    sx={{
                      bgcolor: loc.color,
                      fontWeight: 700,
                      py: 1.3,
                      borderRadius: '100px',
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      '&:hover': { bgcolor: loc.hoverColor },
                    }}
                  >
                    Cómo llegar — Google Maps
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default LocationsSection;
