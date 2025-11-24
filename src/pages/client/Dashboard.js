import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Navigation from '../../components/layout/Navigation';

function Dashboard() {
  const { user } = useContext(AuthContext);

  const upcomingAppointments = [
    { id: 1, service: 'Corte de cabello', date: '2024-11-25', time: '10:00 AM', professional: 'Ana Martínez' },
    { id: 2, service: 'Manicure', date: '2024-11-28', time: '2:00 PM', professional: 'Laura Gómez' }
  ];

  return (
    <div>
      <Navigation />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Bienvenido, {user?.name}</h1>
          <p>Gestiona tus citas y servicios</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Próximas Citas</h3>
            <p>{upcomingAppointments.length}</p>
          </div>
          <div className="stat-card">
            <h3>Este Mes</h3>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h3>Total Citas</h3>
            <p>24</p>
          </div>
        </div>

        <div style={{marginBottom: '2rem'}}>
          <h2>Acciones Rápidas</h2>
          <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
            <Link to="/appointments/new" className="btn-primary">Agendar Nueva Cita</Link>
            <Link to="/appointments" className="btn-link">Ver Todas las Citas</Link>
          </div>
        </div>

        <div>
          <h2>Próximas Citas</h2>
          <div className="appointments-list">
            {upcomingAppointments.map(apt => (
              <div key={apt.id} className="appointment-card">
                <div className="appointment-info">
                  <h3>{apt.service}</h3>
                  <p>📅 {apt.date} a las {apt.time}</p>
                  <p>👤 Con {apt.professional}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;