import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

// Páginas
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ClientDashboard from './pages/client/Dashboard';
import MyAppointments from './pages/client/MyAppointments';
import NewAppointment from './pages/client/NewAppointment';
import AdminDashboard from './pages/admin/Dashboard';
import ProfessionalDashboard from './pages/professional/Dashboard';

function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
      <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <RegisterPage />} />

      {/* Rutas de cliente */}
      <Route path="/dashboard" element={
        <ProtectedRoute allowedRoles={['client']}>
          <ClientDashboard />
        </ProtectedRoute>
      } />
      <Route path="/appointments" element={
        <ProtectedRoute allowedRoles={['client']}>
          <MyAppointments />
        </ProtectedRoute>
      } />
      <Route path="/appointments/new" element={
        <ProtectedRoute allowedRoles={['client']}>
          <NewAppointment />
        </ProtectedRoute>
      } />

      {/* Ruta de admin */}
      <Route path="/admin" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminDashboard />
        </ProtectedRoute>
      } />

      {/* Ruta de profesional */}
      <Route path="/professional" element={
        <ProtectedRoute allowedRoles={['professional']}>
          <ProfessionalDashboard />
        </ProtectedRoute>
      } />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;