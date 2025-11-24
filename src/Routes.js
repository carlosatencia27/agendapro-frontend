import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

// Importar páginas
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ClientDashboard from './pages/client/Dashboard';
import MyAppointments from './pages/client/MyAppointments';
import NewAppointment from './pages/client/NewAppointment';
import AdminDashboard from './pages/admin/Dashboard';
import ProfessionalDashboard from './pages/professional/Dashboard';

// Componente para proteger rutas (solo usuarios logueados)
function PrivateRoute({ children, allowedRoles }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Verificando sesión...</div>;
  }

  // Si no hay usuario, redirigir al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si hay roles específicos, verificar que el usuario tenga ese rol
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

// Componente para rutas públicas (redirige si ya está logueado)
function PublicRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (user) {
    // Redirigir según el tipo de usuario
    if (user.role === 'admin') return <Navigate to="/admin" replace />;
    if (user.role === 'professional') return <Navigate to="/professional" replace />;
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Páginas públicas */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />

      {/* Rutas para clientes */}
      <Route
        path="/dashboard"
        element={<PrivateRoute allowedRoles={['client']}><ClientDashboard /></PrivateRoute>}
      />
      <Route
        path="/appointments"
        element={<PrivateRoute allowedRoles={['client']}><MyAppointments /></PrivateRoute>}
      />
      <Route
        path="/appointments/new"
        element={<PrivateRoute allowedRoles={['client']}><NewAppointment /></PrivateRoute>}
      />

      {/* Rutas para administrador */}
      <Route
        path="/admin"
        element={<PrivateRoute allowedRoles={['admin']}><AdminDashboard /></PrivateRoute>}
      />

      {/* Rutas para profesionales */}
      <Route
        path="/professional"
        element={<PrivateRoute allowedRoles={['professional']}><ProfessionalDashboard /></PrivateRoute>}
      />

      {/* Ruta 404 */}
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
}

export default AppRoutes;