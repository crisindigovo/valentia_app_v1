import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

const theme = createTheme({
  palette: {
    primary: { main: '#2D3748', light: '#4A5568', dark: '#1A202C', contrastText: '#ffffff' },
    secondary: { main: '#4A5568', light: '#718096', dark: '#2D3748', contrastText: '#ffffff' },
    background: { default: '#fafafa', paper: '#ffffff', subtle: '#F7F8FA', muted: '#EDF2F7' },
    services: {
      sports: '#0284C7',
      occupational: '#059669',
      psychology: '#D97706',
      complementary: '#7C3AED',
    },
  },
  shape: { borderRadius: 14 },
  shadows: [
    'none',
    '0 1px 3px rgba(45,55,72,0.07)',
    '0 2px 8px rgba(45,55,72,0.10)',
    '0 4px 16px rgba(45,55,72,0.12)',
    '0 8px 24px rgba(45,55,72,0.14)',
    '0 12px 32px rgba(45,55,72,0.16)',
    '0 16px 40px rgba(45,55,72,0.18)',
    '0 20px 48px rgba(45,55,72,0.20)',
    ...Array(17).fill('none'),
  ],
  typography: {
    fontFamily: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 800, letterSpacing: '-0.03em' },
    h2: { fontWeight: 800, letterSpacing: '-0.03em' },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
