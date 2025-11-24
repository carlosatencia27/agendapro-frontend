import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Navigation() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">AgendaPro</Link>

      <div className="nav-links">
        {/* Menú para clientes */}
        {user?.role === 'client' && (
          <>
            <Link to="/dashboard">Inicio</Link>
            <Link to="/appointments">Mis Citas</Link>
            <Link to="/appointments/new" className="btn-nav">Agendar</Link>
          </>
        )}

        {/* Menú para administradores */}
        {user?.role === 'admin' && (
          <>
            <Link to="/admin">Panel</Link>
            <Link to="/admin">Citas</Link>
          </>
        )}

        {/* Menú para profesionales */}
        {user?.role === 'professional' && (
          <>
            <Link to="/professional">Mi Agenda</Link>
          </>
        )}

        {/* Menú de usuario */}
        <div className="user-menu">
          <span>Hola, {user?.name}</span>
          <button onClick={handleLogout} className="btn-logout">Salir</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;