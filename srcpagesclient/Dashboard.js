import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Navigation from '../../components/layout/Navigation';

function ClientDashboard() {
  const { user } = useContext(AuthContext);

  // Datos de ejemplo de próximas citas
  const upcomingAppointments = [
    {
      id: 1,
      service: 'Corte de cabello',
      professional: 'Ana Martínez',
      date: '2025-11-28',
      time: '14:30'
    },
    {
      id: 2,
      service: 'Manicure',
      professional: 'Carlos Rojas',
      date: '2025-12-02',
      time: '10:00'
    }
  ];

  return (
    <div>
      <Navigation />
      
      <div className="dashboard-container">
        <h1>Bienvenido, {user.name}</h1>
        
        <div className="quick-actions">
          <Link to="/appointments/new" className="action-card primary">
            <span className="icon">📅</span>
            <h3>Agendar Nueva Cita</h3>
            <p>Reserva tu próximo servicio</p>
          </Link>

          <Link to="/appointments" className="action-card">
            <span className="icon">📋</span>
            <h3>Mis Citas</h3>
            <p>Ver todas mis reservas</p>
          </Link>
        </div>

        <section className="upcoming-section">
          <h2>Próximas Citas</h2>
          
          {upcomingAppointments.length > 0 ? (
            <div className="appointments-list">
              {upcomingAppointments.map(apt => (
                <div key={apt.id} className="appointment-card">
                  <div className="apt-header">
                    <h3>{apt.service}</h3>
                    <span className="status confirmed">Confirmada</span>
                  </div>
                  <p><strong>Profesional:</strong> {apt.professional}</p>
                  <p><strong>Fecha:</strong> {apt.date}</p>
                  <p><strong>Hora:</strong> {apt.time}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No tienes citas próximas.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default ClientDashboard;