import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Navigation from '../../components/layout/Navigation';

function AdminDashboard() {
  const { user } = useContext(AuthContext);

  const todayAppointments = [
    { id: 1, client: 'María García', service: 'Corte de cabello', time: '10:00 AM', status: 'confirmed' },
    { id: 2, client: 'Juan Pérez', service: 'Manicure', time: '11:00 AM', status: 'pending' },
    { id: 3, client: 'Ana López', service: 'Facial', time: '2:00 PM', status: 'confirmed' }
  ];

  return (
    <div>
      <Navigation />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Panel de Administración</h1>
          <p>Bienvenido, {user?.name}</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Citas Hoy</h3>
            <p>{todayAppointments.length}</p>
          </div>
          <div className="stat-card">
            <h3>Clientes Activos</h3>
            <p>156</p>
          </div>
          <div className="stat-card">
            <h3>Profesionales</h3>
            <p>8</p>
          </div>
          <div className="stat-card">
            <h3>Ingresos Hoy</h3>
            <p>$450</p>
          </div>
        </div>

        <div>
          <h2>Citas de Hoy</h2>
          <div className="appointments-list">
            {todayAppointments.map(apt => (
              <div key={apt.id} className="appointment-card">
                <div className="appointment-info">
                  <h3>{apt.client}</h3>
                  <p>Servicio: {apt.service}</p>
                  <p>Hora: {apt.time}</p>
                  <p>Estado: {apt.status === 'confirmed' ? '✅ Confirmada' : '⏳ Pendiente'}</p>
                </div>
                <div className="appointment-actions">
                  <button className="btn-confirm">Confirmar</button>
                  <button className="btn-cancel">Cancelar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;