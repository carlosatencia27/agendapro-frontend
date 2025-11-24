import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';

function NewAppointment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Datos de ejemplo
  const services = [
    { id: 1, name: 'Corte de cabello', duration: 30, price: 25000 },
    { id: 2, name: 'Manicure', duration: 45, price: 35000 },
    { id: 3, name: 'Pedicure', duration: 45, price: 35000 },
    { id: 4, name: 'Tinte completo', duration: 120, price: 80000 }
  ];

  const professionals = [
    { id: 1, name: 'Ana Martínez', specialty: 'Estilista' },
    { id: 2, name: 'Carlos Rojas', specialty: 'Barbero' },
    { id: 3, name: 'Laura Pérez', specialty: 'Manicurista' }
  ];

  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  const handleConfirm = () => {
    alert('¡Cita agendada exitosamente!');
    navigate('/appointments');
  };

  return (
    <div>
      <Navigation />
      
      <div className="page-container">
        <h1>Agendar Nueva Cita</h1>

        {/* Indicador de pasos */}
        <div className="steps-indicator">
          <div className={step >= 1 ? 'step active' : 'step'}>1. Servicio</div>
          <div className={step >= 2 ? 'step active' : 'step'}>2. Profesional</div>
          <div className={step >= 3 ? 'step active' : 'step'}>3. Fecha y hora</div>
          <div className={step >= 4 ? 'step active' : 'step'}>4. Confirmar</div>
        </div>

        {/* Paso 1: Seleccionar servicio */}
        {step === 1 && (
          <div className="step-content">
            <h2>¿Qué servicio necesitas?</h2>
            <div className="services-grid">
              {services.map(service => (
                <div 
                  key={service.id}
                  className={`service-card ${selectedService?.id === service.id ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedService(service);
                    setStep(2);
                  }}
                >
                  <h3>{service.name}</h3>
                  <p>{service.duration} minutos</p>
                  <p className="price">${service.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Paso 2: Seleccionar profesional */}
        {step === 2 && (
          <div className="step-content">
            <h2>¿Con quién quieres agendarte?</h2>
            <div className="professionals-grid">
              {professionals.map(prof => (
                <div 
                  key={prof.id}
                  className={`professional-card ${selectedProfessional?.id === prof.id ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedProfessional(prof);
                    setStep(3);
                  }}
                >
                  <h3>{prof.name}</h3>
                  <p>{prof.specialty}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="btn-secondary">Atrás</button>
          </div>
        )}

        {/* Paso 3: Seleccionar fecha y hora */}
        {step === 3 && (
          <div className="step-content">
            <h2>¿Cuándo te gustaría?</h2>
            
            <div className="form-group">
              <label>Fecha</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {selectedDate && (
              <>
                <h3>Horarios disponibles</h3>
                <div className="time-slots">
                  {availableTimes.map(time => (
                    <button
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="button-group">
              <button onClick={() => setStep(2)} className="btn-secondary">Atrás</button>
              {selectedTime && (
                <button onClick={() => setStep(4)} className="btn-primary">Continuar</button>
              )}
            </div>
          </div>
        )}

        {/* Paso 4: Confirmar */}
        {step === 4 && (
          <div className="step-content">
            <h2>Confirma tu cita</h2>
            
            <div className="summary-card">
              <h3>Resumen</h3>
              <p><strong>Servicio:</strong> {selectedService.name}</p>
              <p><strong>Profesional:</strong> {selectedProfessional.name}</p>
              <p><strong>Fecha:</strong> {selectedDate}</p>
              <p><strong>Hora:</strong> {selectedTime}</p>
              <p><strong>Duración:</strong> {selectedService.duration} minutos</p>
              <p className="total"><strong>Total:</strong> ${selectedService.price.toLocaleString()}</p>
            </div>

            <div className="button-group">
              <button onClick={() => setStep(3)} className="btn-secondary">Atrás</button>
              <button onClick={handleConfirm} className="btn-primary">Confirmar cita</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewAppointment;
