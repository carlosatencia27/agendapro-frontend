import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Navigation from '../../components/layout/Navigation';

function ProfessionalDashboard() {
  const { user } = useContext(AuthContext);

  // Citas del día para el profesional
  const myAppointments = [
    { id: 1, client: 'María García', service: 'Corte', time: '09:00' },
    { id: 2, client: 'Juan Pérez', service: 'Barba', time: '10:00' },
    { id: 3, client: 'Ana López', service: 'Corte y barba', time: '11:00' },
    { id: 4, client: 'Pedro Gómez', service: 'Corte', time: '15:00' }
  ];

  return (
    <div>
      <Navigation />
      
      <div className="page-container">
        <h1>Mi Agenda - {user.name}</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Citas Hoy</h3>
            <p className="stat-number">{myAppointments.length}</p>
          </div>
          <div className="stat-card">
            <h3>Próxima Cita</h3>
            <p className="stat-number">{myAppointments[0].time}</p>
          </div>
        </div>

        <section>
          <h2>Agenda del Día</h2>
          <div className="schedule-list">
            {myAppointments.map(apt => (
              <div key={apt.id} className="schedule-item">
                <div className="time-badge">{apt.time}</div>
                <div className="schedule-details">
                  <strong>{apt.client}</strong>
                  <p>{apt.service}</p>
                </div>
                <button className="btn-small">Completar</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfessionalDashboard;