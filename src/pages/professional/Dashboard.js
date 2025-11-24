import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Navigation from '../../components/layout/Navigation';

function ProfessionalDashboard() {
  const { user } = useContext(AuthContext);

  const myAppointments = [
    { id: 1, client: 'María García', service: 'Corte de cabello', time: '10:00 AM' },
    { id: 2, client: 'Pedro Martínez', service: 'Tinte', time: '11:30 AM' },
    { id: 3, client: 'Laura Sánchez', service: 'Peinado', time: '3:00 PM' }
  ];

  return (
    <div>
      <Navigation />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Mi Agenda</h1>
          <p>Bienvenida, {user?.name}</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Citas Hoy</h3>
            <p>{myAppointments.length}</p>
          </div>
          <div className="stat-card">
            <h3>Esta Semana</h3>
            <p>18</p>
          </div>
          <div className="stat-card">
            <h3>Clientes Atendidos</h3>
            <p>89</p>
          </div>
        </div>

        <div>
          <h2>Mis Citas de Hoy</h2>
          <div className="appointments-list">
            {myAppointments.map(apt => (
              <div key={apt.id} className="appointment-card">
                <div className="appointment-info">
                  <h3>{apt.client}</h3>
                  <p>Servicio: {apt.service}</p>
                  <p>Hora: {apt.time}</p>
                </div>
                <div className="appointment-actions">
                  <button className="btn-confirm">Completar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalDashboard;