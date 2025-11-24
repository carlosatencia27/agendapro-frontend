import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';

function MyAppointments() {
  // Datos de ejemplo
  const [appointments] = useState([
    {
      id: 1,
      service: 'Corte de cabello',
      professional: 'Ana Martínez',
      date: '2025-11-28',
      time: '14:30',
      duration: 30,
      price: 25000,
      status: 'confirmada'
    },
    {
      id: 2,
      service: 'Manicure',
      professional: 'Carlos Rojas',
      date: '2025-12-02',
      time: '10:00',
      duration: 45,
      price: 35000,
      status: 'confirmada'
    },
    {
      id: 3,
      service: 'Tinte completo',
      professional: 'Ana Martínez',
      date: '2025-10-15',
      time: '15:00',
      duration: 120,
      price: 80000,
      status: 'completada'
    }
  ]);

  const handleCancel = (id) => {
    if (window.confirm('¿Seguro que quieres cancelar esta cita?')) {
      alert('Cita cancelada');
      // Aquí iría la lógica real de cancelación
    }
  };

  // Separar citas por estado
  const upcoming = appointments.filter(apt => apt.status === 'confirmada');
  const past = appointments.filter(apt => apt.status === 'completada');

  return (
    <div>
      <Navigation />
      
      <div className="page-container">
        <div className="page-header">
          <h1>Mis Citas</h1>
          <Link to="/appointments/new" className="btn-primary">
            + Agendar Nueva
          </Link>
        </div>

        <section className="appointments-section">
          <h2>Próximas Citas</h2>
          
          {upcoming.length > 0 ? (
            <div className="appointments-grid">
              {upcoming.map(apt => (
                <div key={apt.id} className="appointment-card">
                  <div className="apt-header">
                    <h3>{apt.service}</h3>
                    <span className={`status ${apt.status}`}>
                      {apt.status}
                    </span>
                  </div>
                  
                  <div className="apt-details">
                    <p><strong>Profesional:</strong> {apt.professional}</p>
                    <p><strong>Fecha:</strong> {apt.date}</p>
                    <p><strong>Hora:</strong> {apt.time}</p>
                    <p><strong>Duración:</strong> {apt.duration} minutos</p>
                    <p><strong>Precio:</strong> ${apt.price.toLocaleString()}</p>
                  </div>

                  <button 
                    onClick={() => handleCancel(apt.id)}
                    className="btn-danger"
                  >
                    Cancelar cita
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No tienes citas próximas. <Link to="/appointments/new">Agenda una ahora</Link></p>
          )}
        </section>

        <section className="appointments-section">
          <h2>Historial</h2>
          
          {past.length > 0 ? (
            <div className="appointments-grid">
              {past.map(apt => (
                <div key={apt.id} className="appointment-card past">
                  <div className="apt-header">
                    <h3>{apt.service}</h3>
                    <span className={`status ${apt.status}`}>
                      Completada
                    </span>
                  </div>
                  
                  <div className="apt-details">
                    <p><strong>Profesional:</strong> {apt.professional}</p>
                    <p><strong>Fecha:</strong> {apt.date}</p>
                    <p><strong>Hora:</strong> {apt.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No tienes citas pasadas aún.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default MyAppointments;