import Navigation from '../../components/layout/Navigation';

function MyAppointments() {
  const appointments = [
    { id: 1, service: 'Corte de cabello', date: '2024-11-25', time: '10:00 AM', status: 'confirmed', professional: 'Ana Martínez' },
    { id: 2, service: 'Manicure', date: '2024-11-28', time: '2:00 PM', status: 'pending', professional: 'Laura Gómez' },
    { id: 3, service: 'Facial', date: '2024-11-20', time: '11:00 AM', status: 'completed', professional: 'Ana Martínez' }
  ];

  const getStatusText = (status) => {
    const statuses = {
      confirmed: '✅ Confirmada',
      pending: '⏳ Pendiente',
      completed: '✔️ Completada',
      cancelled: '❌ Cancelada'
    };
    return statuses[status];
  };

  return (
    <div>
      <Navigation />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Mis Citas</h1>
          <p>Historial completo de tus reservas</p>
        </div>

        <div className="appointments-list">
          {appointments.map(apt => (
            <div key={apt.id} className="appointment-card">
              <div className="appointment-info">
                <h3>{apt.service}</h3>
                <p>📅 {apt.date} a las {apt.time}</p>
                <p>👤 Con {apt.professional}</p>
                <p><strong>{getStatusText(apt.status)}</strong></p>
              </div>
              {apt.status === 'confirmed' && (
                <div className="appointment-actions">
                  <button className="btn-cancel">Cancelar</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyAppointments;