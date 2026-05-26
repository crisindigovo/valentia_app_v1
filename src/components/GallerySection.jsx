import { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography, IconButton, CircularProgress } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { motion } from 'framer-motion';
import { fadeInUp, viewportOptions } from '../lib/animations';
import { supabase } from '../lib/supabase';

// Imágenes locales desde /assets
import imgPergola from '../assets/pergola.jpg';
import imgRotonda from '../assets/rotonda.jpeg';
import imgFutbol from '../assets/valentia_futbol.jpg';
import imgWA1 from '../assets/WhatsApp Image 2025-10-21 at 14.18.23.jpeg';
import imgWA2 from '../assets/WhatsApp Image 2025-10-21 at 14.18.23 (1).jpeg';
import imgWA3 from '../assets/WhatsApp Image 2025-10-21 at 14.18.30.jpeg';
import imgWA4 from '../assets/WhatsApp Image 2025-10-21 at 14.18.31.jpeg';
import imgWA5 from '../assets/WhatsApp Image 2025-10-21 at 14.18.31 (1).jpeg';
import imgWA6 from '../assets/WhatsApp Image 2025-10-21 at 14.18.31 (2).jpeg';
import imgWA7 from '../assets/WhatsApp Image 2025-10-21 at 14.18.31 (3).jpeg';
import imgWA8 from '../assets/WhatsApp Image 2025-10-21 at 14.18.32 (2).jpeg';

const FALLBACK_IMAGES = [
  { public_url: imgPergola, caption: 'Área de descanso y recuperación' },
  { public_url: imgRotonda, caption: 'Espacios comunes de bienestar' },
  { public_url: imgFutbol, caption: 'Rehabilitación deportiva de alto rendimiento' },
  { public_url: imgWA1, caption: 'Nuestras instalaciones' },
  { public_url: imgWA2, caption: 'Ambientes terapéuticos' },
  { public_url: imgWA3, caption: 'Espacios de recuperación' },
  { public_url: imgWA4, caption: 'Atención personalizada' },
  { public_url: imgWA5, caption: 'Terapia integral' },
  { public_url: imgWA6, caption: 'Centro Valentía' },
  { public_url: imgWA7, caption: 'Apoyo y bienestar' },
  { public_url: imgWA8, caption: 'Transformando vidas' },
];

const AUTOPLAY_INTERVAL = 4000;

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('public_url, caption')
        .order('display_order', { ascending: true });

      if (!error && data && data.length > 0) {
        setImages(data);
      } else {
        setImages(FALLBACK_IMAGES);
      }
      setLoadingImages(false);
    };

    fetchImages();
  }, []);

  const goTo = useCallback(
    (index) => {
      if (animating || images.length === 0) return;
      setAnimating(true);
      setCurrent((index + images.length) % images.length);
      setTimeout(() => setAnimating(false), 400);
    },
    [animating, images.length]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (!isPlaying || images.length === 0) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPlaying, next, images.length]);

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  if (loadingImages) {
    return (
      <Box sx={{ py: 10, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress sx={{ color: '#381d92' }} />
      </Box>
    );
  }

  const currentImage = images[current];

  return (
    <Box id="galeria" sx={{ py: 12, bgcolor: '#F8F7FF' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          component={motion.div}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Typography
            variant="overline"
            sx={{ color: '#381d92', fontWeight: 700, fontSize: '0.82rem', letterSpacing: 3 }}
          >
            NUESTRAS INSTALACIONES
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 700, mt: 1.5, mb: 2, color: '#381d92', fontSize: { xs: '1.9rem', md: '2.75rem' } }}
          >
            Galería
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: '560px', mx: 'auto', color: 'text.secondary', lineHeight: 1.75, fontSize: '1.05rem' }}
          >
            Conocé los espacios donde transformamos vidas
          </Typography>
        </Box>

        {/* Carrusel principal */}
        <Box
          component={motion.div}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          sx={{ position: 'relative', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 60px rgba(56,29,146,0.20)', bgcolor: '#000' }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <Box
            component="img"
            src={currentImage?.public_url}
            alt={currentImage?.caption}
            sx={{
              width: '100%',
              height: { xs: 260, sm: 380, md: 520 },
              objectFit: 'cover',
              display: 'block',
              opacity: animating ? 0 : 1,
              transition: 'opacity 0.4s ease',
            }}
          />

          {/* Gradiente + caption */}
          <Box
            sx={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              p: { xs: 2, md: 4 }, pt: { xs: 5, md: 8 },
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 500, fontSize: { xs: '0.95rem', md: '1.2rem' } }}>
              {currentImage?.caption}
            </Typography>
          </Box>

          {/* Flecha izquierda */}
          <IconButton
            onClick={prev}
            sx={{
              position: 'absolute', left: { xs: 8, md: 16 }, top: '50%', transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.85)', color: '#381d92', zIndex: 2,
              '&:hover': { bgcolor: 'white', transform: 'translateY(-50%) scale(1.1)' },
              transition: 'all 0.2s',
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          {/* Flecha derecha */}
          <IconButton
            onClick={next}
            sx={{
              position: 'absolute', right: { xs: 8, md: 16 }, top: '50%', transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.85)', color: '#381d92', zIndex: 2,
              '&:hover': { bgcolor: 'white', transform: 'translateY(-50%) scale(1.1)' },
              transition: 'all 0.2s',
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>

          {/* Play/Pause */}
          <IconButton
            onClick={() => setIsPlaying((p) => !p)}
            size="small"
            sx={{
              position: 'absolute', top: 12, right: 12,
              bgcolor: 'rgba(255,255,255,0.8)', color: '#381d92', zIndex: 2,
              '&:hover': { bgcolor: 'white' },
            }}
          >
            {isPlaying ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
          </IconButton>

          {/* Contador */}
          <Box
            sx={{
              position: 'absolute', top: 12, left: 12,
              bgcolor: 'rgba(56,29,146,0.75)', color: 'white',
              px: 1.5, py: 0.5, borderRadius: 2,
              fontSize: '0.8rem', fontWeight: 600, zIndex: 2,
            }}
          >
            {current + 1} / {images.length}
          </Box>
        </Box>

        {/* Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
          {images.map((_, i) => (
            <Box
              key={i}
              onClick={() => goTo(i)}
              sx={{
                width: i === current ? 28 : 10, height: 10,
                borderRadius: 5,
                bgcolor: i === current ? '#381d92' : '#c4b8f0',
                cursor: 'pointer',
                transition: 'all 0.3s',
                '&:hover': { bgcolor: '#5b3cc4' },
              }}
            />
          ))}
        </Box>

        {/* Thumbnails */}
        <Box
          sx={{
            display: 'flex', gap: 1.5, mt: 3,
            overflowX: 'auto', pb: 1,
            justifyContent: { xs: 'flex-start', md: 'center' },
            '&::-webkit-scrollbar': { height: 4 },
            '&::-webkit-scrollbar-thumb': { bgcolor: '#c4b8f0', borderRadius: 2 },
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img.public_url}
              alt={img.caption}
              onClick={() => goTo(i)}
              sx={{
                width: 100, height: 65,
                objectFit: 'cover', borderRadius: 1.5,
                cursor: 'pointer', flexShrink: 0,
                border: i === current ? '3px solid #381d92' : '3px solid transparent',
                opacity: i === current ? 1 : 0.6,
                transition: 'all 0.2s',
                '&:hover': { opacity: 1 },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default GallerySection;
