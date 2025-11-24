import { useState } from 'react';
import Navigation from '../../components/layout/Navigation';

function AdminDashboard() {
  // Datos de ejemplo de citas de hoy
  const [todayAppointments] = useState([
    {
      id: 1,
      client: 'María García',
      service: 'Corte de cabello',
      professional: 'Ana Martínez',
      time: '09:00',
      status: 'confirmada'
    },
    {
      id: 2,
      client: 'Juan Pérez',
      service: 'Manicure',
      professional: 'Laura Pérez',
      time: '10:00',
      status: 'confirmada'
    },
    {
      id: 3,
      client: 'Carlos López',
      service: 'Tinte',
      professional: 'Ana Martínez',
      time: '14:00',
      status: 'pendiente'
    }
  ]);

  const handleConfirm = (id) => {
    alert(`Cita ${id} confirmada`);
  };

  const handleCancel = (id) => {
    if (window.confirm('¿Cancelar esta cita?')) {
      alert(`Cita ${id} cancelada`);
    }
  };

  return (
    <div>
      <Navigation />
      
      <div className="page-container">
        <h1>Panel de Administración</h1>

        {/* Estadísticas rápidas */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Citas Hoy</h3>
            <p className="stat-number">{todayAppointments.length}</p>
          </div>
          <div className="stat-card">
            <h3>Confirmadas</h3>
            <p className="stat-number">
              {todayAppointments.filter(a => a.status === 'confirmada').length}
            </p>
          </div>
          <div className="stat-card">
            <h3>Pendientes</h3>
            <p className="stat-number">
              {todayAppointments.filter(a => a.status === 'pendiente').length}
            </p>
          </div>
          <div className="stat-card">
            <h3>Ingresos Hoy</h3>
            <p className="stat-number">$150,000</p>
          </div>
        </div>

        {/* Citas del día */}
        <section>
          <h2>Citas de Hoy</h2>
          <div className="appointments-table">
            {todayAppointments.map(apt => (
              <div key={apt.id} className="appointment-row">
                <div className="apt-info">
                  <strong>{apt.time}</strong> - {apt.client}
                  <br />
                  <small>{apt.service} con {apt.professional}</small>
                </div>
                <div className="apt-status">
                  <span className={`status ${apt.status}`}>{apt.status}</span>
                </div>
                <div className="apt-actions">
                  {apt.status === 'pendiente' && (
                    <button 
                      onClick={() => handleConfirm(apt.id)}
                      className="btn-small btn-success"
                    >
                      Confirmar
                    </button>
                  )}
                  <button 
                    onClick={() => handleCancel(apt.id)}
                    className="btn-small btn-danger"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
