import { useState, useEffect, useRef } from 'react';
import {
  Box, Container, Typography, Button, TextField, Grid, Card,
  CardMedia, CardContent, CardActions, IconButton, Alert,
  CircularProgress, Paper, Chip, Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import ImageIcon from '@mui/icons-material/Image';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const { logout, profile } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editCaption, setEditCaption] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('display_order', { ascending: true });
    if (!error) setImages(data || []);
    setLoading(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setError('');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setError('');
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    setError('');

    const ext = selectedFile.name.split('.').pop();
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(filename, selectedFile, { cacheControl: '3600', upsert: false });

    if (uploadError) {
      setError('Error al subir: ' + uploadError.message);
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from('gallery').getPublicUrl(filename);

    const { error: dbError } = await supabase.from('gallery_images').insert({
      filename,
      caption: caption.trim() || selectedFile.name,
      public_url: publicUrl,
      display_order: images.length,
    });

    if (dbError) {
      setError('Error al guardar: ' + dbError.message);
    } else {
      setSuccess('¡Imagen subida correctamente!');
      setSelectedFile(null);
      setPreview(null);
      setCaption('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      fetchImages();
    }
    setUploading(false);
  };

  const handleDelete = async (image) => {
    setDeletingId(image.id);
    await supabase.storage.from('gallery').remove([image.filename]);
    await supabase.from('gallery_images').delete().eq('id', image.id);
    setDeletingId(null);
    fetchImages();
  };

  const handleSaveCaption = async (image) => {
    await supabase.from('gallery_images').update({ caption: editCaption }).eq('id', image.id);
    setEditingId(null);
    fetchImages();
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8f7ff' }}>
      {/* Topbar */}
      <Box sx={{ bgcolor: '#2D3748', color: 'white', py: 1.5, px: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <LocalHospitalIcon />
              <Typography variant="h6" fontWeight={700}>
                Panel de Administración
              </Typography>
              <Chip label="Galería" size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" sx={{ opacity: 0.85 }}>
                {profile?.full_name || profile?.email || 'Admin'}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                sx={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                Salir
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Upload section */}
        <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={700} mb={2} color="#2D3748">
            Subir nueva imagen
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess('')}>{success}</Alert>}

          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {/* Drop zone */}
            <Box
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              sx={{
                width: 220,
                height: 150,
                border: '2px dashed',
                borderColor: preview ? '#2D3748' : '#c4b8f0',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                overflow: 'hidden',
                bgcolor: '#faf9ff',
                transition: 'all 0.2s',
                '&:hover': { borderColor: '#2D3748', bgcolor: '#EDF2F7' },
              }}
            >
              {preview ? (
                <img src={preview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <>
                  <ImageIcon sx={{ fontSize: 40, color: '#c4b8f0', mb: 1 }} />
                  <Typography variant="caption" color="text.secondary" textAlign="center" px={1}>
                    Click o arrastrá una imagen aquí
                  </Typography>
                </>
              )}
            </Box>
            <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleFileSelect} />

            <Box sx={{ flex: 1, minWidth: 220 }}>
              <TextField
                label="Descripción de la imagen"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
                placeholder="Ej: Sala de fisioterapia"
                helperText="Si no completás este campo, se usará el nombre del archivo."
              />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="contained"
                  onClick={handleUpload}
                  disabled={!selectedFile || uploading}
                  startIcon={uploading ? <CircularProgress size={18} color="inherit" /> : <CloudUploadIcon />}
                  sx={{ bgcolor: '#2D3748', '&:hover': { bgcolor: '#1A202C' } }}
                >
                  {uploading ? 'Subiendo...' : 'Subir imagen'}
                </Button>
                {selectedFile && (
                  <Button
                    variant="outlined"
                    onClick={() => { setSelectedFile(null); setPreview(null); setCaption(''); }}
                    sx={{ borderColor: '#c4b8f0', color: '#2D3748' }}
                  >
                    Cancelar
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Images grid */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight={700} color="#2D3748">
            Imágenes en galería
          </Typography>
          <Chip
            label={`${images.length} imagen${images.length !== 1 ? 'es' : ''}`}
            sx={{ bgcolor: '#EDF2F7', color: '#2D3748', fontWeight: 600 }}
          />
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress sx={{ color: '#2D3748' }} />
          </Box>
        ) : images.length === 0 ? (
          <Paper sx={{ p: 8, textAlign: 'center', borderRadius: 2 }}>
            <ImageIcon sx={{ fontSize: 60, color: '#c4b8f0', mb: 2 }} />
            <Typography color="text.secondary">
              No hay imágenes en la galería todavía. ¡Subí la primera!
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {images.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <Card sx={{ borderRadius: 2, boxShadow: '0 2px 12px rgba(45,55,72,0.08)', height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={image.public_url}
                    alt={image.caption}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ pb: 0 }}>
                    {editingId === image.id ? (
                      <TextField
                        value={editCaption}
                        onChange={(e) => setEditCaption(e.target.value)}
                        size="small"
                        fullWidth
                        autoFocus
                        onKeyDown={(e) => { if (e.key === 'Enter') handleSaveCaption(image); if (e.key === 'Escape') setEditingId(null); }}
                      />
                    ) : (
                      <Typography variant="body2" color="text.secondary" noWrap title={image.caption}>
                        {image.caption}
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
                    {editingId === image.id ? (
                      <>
                        <Tooltip title="Guardar">
                          <IconButton size="small" onClick={() => handleSaveCaption(image)} sx={{ color: '#2D3748' }}>
                            <SaveIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Cancelar">
                          <IconButton size="small" onClick={() => setEditingId(null)} sx={{ color: 'text.secondary' }}>
                            <CancelIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </>
                    ) : (
                      <Tooltip title="Editar descripción">
                        <IconButton
                          size="small"
                          onClick={() => { setEditingId(image.id); setEditCaption(image.caption); }}
                          sx={{ color: '#2D3748' }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                    <Tooltip title="Eliminar imagen">
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(image)}
                        disabled={deletingId === image.id}
                        sx={{ color: 'error.main' }}
                      >
                        {deletingId === image.id
                          ? <CircularProgress size={16} color="error" />
                          : <DeleteIcon fontSize="small" />}
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default AdminPage;
