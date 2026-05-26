import { Box } from '@mui/material';
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

const fabVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1.4, type: 'spring', stiffness: 200, damping: 14, mass: 0.8 },
  },
};

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
        component={motion.div}
        variants={fabVariants}
        initial="hidden"
        animate="visible"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 28 },
          right: { xs: 20, md: 28 },
          zIndex: 1300,
        }}
      >
        {/* Pulse ring */}
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.5], opacity: [0.35, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            bgcolor: '#25D366',
            pointerEvents: 'none',
          }}
        />

        <Box
          component={motion.a}
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, boxShadow: '0 16px 36px rgba(37,211,102,0.55)' }}
          whileTap={{ scale: 0.93 }}
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#25D366',
            color: 'white',
            width: 56,
            height: 56,
            borderRadius: '50%',
            boxShadow: '0 4px 20px rgba(37,211,102,0.40)',
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': { bgcolor: '#1fb855' },
            transition: 'background-color 0.2s',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
