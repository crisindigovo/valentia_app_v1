import { Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import GallerySection from '../components/GallerySection';
import ServicesSection from '../components/ServicesSection';
import ReserveSection from '../components/ReserveSection';
import NewsSection from '../components/NewsSection';
import ContactForm from '../components/ContactForm';
import LocationsSection from '../components/LocationsSection';
import Footer from '../components/Footer';

const WA_URL = 'https://wa.me/56940210310';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <HeroSection />
      <MissionSection />
      <GallerySection />
      <ServicesSection />
      <ReserveSection />
      <NewsSection />
      <ContactForm />
      <LocationsSection />
      <Footer />

      {/* WhatsApp FAB */}
      <Box
        component={motion.a}
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 28 },
          right: { xs: 20, md: 28 },
          zIndex: 1300,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          bgcolor: '#25D366',
          color: 'white',
          px: 2.5,
          py: 1.4,
          borderRadius: '100px',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          textDecoration: 'none',
          '&:hover': { bgcolor: '#1fb855' },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 26 }} />
        <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1 }}>
          Contáctanos
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
