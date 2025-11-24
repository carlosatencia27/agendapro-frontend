import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <h1 className="logo">AgendaPro</h1>
        <div>
          <Link to="/login" className="btn-link">Iniciar sesión</Link>
          <Link to="/register" className="btn-primary">Registrarse</Link>
        </div>
      </nav>

      <main className="hero">
        <h1>Agenda tus citas en segundos</h1>
        <p>Sistema de reservas para Bella Imagen - Tu centro de estética de confianza</p>
        <Link to="/register" className="btn-large">Empieza ahora</Link>
      </main>

      <section className="features">
        <div className="feature-card">
          <h3>📅 Reserva 24/7</h3>
          <p>Agenda cuando quieras, sin esperar llamadas</p>
        </div>
        <div className="feature-card">
          <h3>⏰ Recordatorios</h3>
          <p>Te avisamos antes de tu cita</p>
        </div>
        <div className="feature-card">
          <h3>💇 Elige tu profesional</h3>
          <p>Escoge con quién quieres atenderte</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;