import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';

function NewAppointment() {
  const [service, setService] = useState('');
  const [professional, setProfessional] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const services = ['Corte de cabello', 'Manicure', 'Pedicure', 'Facial', 'Tinte', 'Masaje'];
  const professionals = ['Ana Martínez', 'Laura Gómez', 'Carlos Ruiz'];
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => navigate('/appointments'), 2000);
  };

  return (
    <div>
      <Navigation />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Agendar Nueva Cita</h1>
          <p>Completa los datos para reservar tu cita</p>
        </div>

        {success && (
          <div className="success-message">
            ¡Cita agendada exitosamente! Redirigiendo...
          </div>
        )}

        <div style={{background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '600px'}}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Servicio</label>
              <select value={service} onChange={(e) => setService(e.target.value)} required>
                <option value="">Selecciona un servicio</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Profesional</label>
              <select value={professional} onChange={(e) => setProfessional(e.target.value)} required>
                <option value="">Selecciona un profesional</option>
                {professionals.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Fecha</label>
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Hora</label>
              <select value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Selecciona una hora</option>
                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{width: '100%'}}>
              Confirmar Cita
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewAppointment;