import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const user = await login(email, password);
      
      if (user.role === 'client') {
        navigate('/dashboard');
      } else if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'professional') {
        navigate('/professional');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Iniciar Sesión</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn-primary" style={{width: '100%'}}>
            Entrar
          </button>
        </form>
        
        <p style={{textAlign: 'center', marginTop: '1rem'}}>
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>

        <div style={{marginTop: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '6px', fontSize: '0.9rem'}}>
          <strong>Usuarios de prueba:</strong>
          <ul style={{marginTop: '0.5rem', marginLeft: '1rem'}}>
            <li>Cliente: cliente@ejemplo.com / cliente123</li>
            <li>Admin: admin@bellaimagen.com / admin123</li>
            <li>Profesional: ana@bellaimagen.com / profesional123</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;