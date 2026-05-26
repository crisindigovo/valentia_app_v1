import { Box, Typography, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion, useAnimation } from 'framer-motion';
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
      <Tooltip
        title="+56 9 4021 0310"
        placement="left"
        arrow
        componentsProps={{
          tooltip: { sx: { fontSize: '0.85rem', fontWeight: 600, bgcolor: '#1a1a1a', px: 1.5, py: 0.8 } },
          arrow: { sx: { color: '#1a1a1a' } },
        }}
      >
        <Box
          component={motion.a}
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          variants={fabVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -4, boxShadow: '0 16px 36px rgba(37,211,102,0.50)' }}
          whileTap={{ scale: 0.93 }}
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
            boxShadow: '0 4px 20px rgba(37,211,102,0.40)',
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': { bgcolor: '#1fb855' },
            transition: 'background-color 0.2s',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 26 }} />
          <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1 }}>
            Contáctanos
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default LandingPage;
