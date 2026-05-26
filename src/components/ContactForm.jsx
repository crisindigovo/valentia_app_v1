import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  Snackbar,
  Grid,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { motion } from 'framer-motion';
import { fadeInUp, viewportOptions } from '../lib/animations';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    else if (formData.nombre.length < 2) newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'El email no es válido';

    if (formData.telefono && !/^\d{9,15}$/.test(formData.telefono.replace(/\s/g, '')))
      newErrors.telefono = 'El teléfono debe tener entre 9 y 15 dígitos';

    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es requerido';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';
    else if (formData.mensaje.length < 10) newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Datos del formulario:', formData);
      setSnackbarMessage('¡Mensaje enviado exitosamente!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
    } else {
      setSnackbarMessage('Por favor, corrige los errores en el formulario');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      <Box id="contacto" sx={{ py: 12, bgcolor: '#F8F7FF' }}>
        <Container maxWidth="md">
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* Header */}
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  p: 1.8,
                  borderRadius: '50%',
                  bgcolor: '#F0ECFF',
                  mb: 2.5,
                }}
              >
                <EmailIcon sx={{ fontSize: 40, color: '#381d92' }} />
              </Box>
              <Typography
                variant="overline"
                sx={{ display: 'block', color: '#381d92', fontWeight: 700, fontSize: '0.82rem', letterSpacing: 3, mb: 1.5 }}
              >
                ESCRÍBENOS
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: 700, mb: 2, color: '#381d92', fontSize: { xs: '1.9rem', md: '2.75rem' } }}
              >
                Contáctanos
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75 }}>
                ¿En qué podemos ayudarte? Completa el formulario y nos pondremos en contacto contigo
              </Typography>
            </Box>

            {/* Form card */}
            <Box
              sx={{
                bgcolor: 'white',
                borderRadius: 3,
                p: { xs: 3, md: 5 },
                boxShadow: '0 4px 24px rgba(56,29,146,0.10)',
                border: '1px solid rgba(56,29,146,0.07)',
              }}
            >
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      error={!!errors.nombre}
                      helperText={errors.nombre}
                      required
                      InputProps={{
                        startAdornment: <PersonIcon sx={{ mr: 1, color: 'action.active' }} />,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                      InputProps={{
                        startAdornment: <EmailIcon sx={{ mr: 1, color: 'action.active' }} />,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      error={!!errors.telefono}
                      helperText={errors.telefono || 'Opcional'}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      error={!!errors.asunto}
                      helperText={errors.asunto}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      error={!!errors.mensaje}
                      helperText={errors.mensaje}
                      required
                      multiline
                      rows={6}
                      InputProps={{
                        startAdornment: (
                          <MessageIcon sx={{ mr: 1, color: 'action.active', alignSelf: 'flex-start', mt: 2 }} />
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      component={motion.button}
                      whileHover={{ y: -3, boxShadow: '0 10px 28px rgba(56,29,146,0.30)' }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.6,
                        bgcolor: '#381d92',
                        fontWeight: 700,
                        fontSize: '1rem',
                        borderRadius: '100px',
                        boxShadow: '0 4px 16px rgba(56,29,146,0.25)',
                        '&:hover': { bgcolor: '#2a1570' },
                      }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
