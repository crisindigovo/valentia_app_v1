import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
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
    embedUrl: 'https://maps.google.com/maps?q=Centro+de+Rehabilitaci%C3%B3n+Valent%C3%ADa+Casablanca+Valpara%C3%ADso&output=embed&hl=es&z=15',
    gradient: 'linear-gradient(135deg, #2D3748 0%, #4A5568 100%)',
    color: '#2D3748',
    hoverColor: '#1A202C',
  },
  {
    id: 2,
    name: 'Sede Metropolitana',
    badge: 'Sede 2',
    city: 'Paine, Santiago',
    phone: '+56 9 7212 4604',
    hours: 'Abierto las 24 horas · Todos los días',
    mapsUrl: 'https://www.google.com/maps?vet=10CAAQoqAOahcKEwjIg-PwjNeUAxUAAAAAHQAAAAAQDA..i&rlz=1C1ONGR_enCL1186CL1186&pvq=Cg0vZy8xMXlkMTRyaGI5IigKImNlbnRybyBkZSByZWhhYmlsaXRhY2nDs24gdmFsZW50aWEQAhgD&lqi=CiJjZW50cm8gZGUgcmVoYWJpbGl0YWNpw7NuIHZhbGVudGlhSMn6rpKwvYCACFo0EAAQARACEAMYABgBGAIYAyIiY2VudHJvIGRlIHJlaGFiaWxpdGFjacOzbiB2YWxlbnRpYZIBFXJlaGFiaWxpdGF0aW9uX2NlbnRlcg&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=cl&sa=X&ftid=0x96633dd3de5d3b63:0x7c399660edc98b89',
    embedUrl: 'https://maps.google.com/maps?q=Centro+de+Rehabilitaci%C3%B3n+Valent%C3%ADa+Paine+Santiago&output=embed&hl=es&z=15',
    gradient: 'linear-gradient(135deg, #4A5568 0%, #718096 100%)',
    color: '#4A5568',
    hoverColor: '#374151',
  },
];

const LocationsSection = () => (
  <Box id="ubicaciones" sx={{ py: 12, bgcolor: '#F7F8FA' }}>
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
          sx={{ color: '#2D3748', fontWeight: 700, fontSize: '0.82rem', letterSpacing: 3 }}
        >
          DÓNDE ESTAMOS
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 700, mt: 1.5, mb: 2, color: '#2D3748', fontSize: { xs: '1.9rem', md: '2.75rem' } }}
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
                  border: '1px solid rgba(45,55,72,0.10)',
                  height: '100%',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: '0 20px 48px rgba(45,55,72,0.16)' },
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

                {/* Map embed */}
                <Box
                  onClick={() => window.open(loc.mapsUrl, '_blank', 'noopener,noreferrer')}
                  sx={{ position: 'relative', height: 180, cursor: 'pointer', overflow: 'hidden' }}
                >
                  <Box
                    component="iframe"
                    src={loc.embedUrl}
                    title={`Mapa ${loc.name}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sx={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      display: 'block',
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Clickable overlay with hint */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-end',
                      p: 1,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 60%)',
                      transition: 'background 0.2s',
                      '&:hover': { background: 'linear-gradient(to top, rgba(0,0,0,0.32) 0%, transparent 60%)' },
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'white',
                        borderRadius: '100px',
                        px: 1.5,
                        py: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    >
                      <DirectionsIcon sx={{ fontSize: 14, color: loc.color }} />
                      <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: loc.color, lineHeight: 1 }}>
                        Ver en Maps
                      </Typography>
                    </Box>
                  </Box>
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
