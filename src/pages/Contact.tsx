import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En una app real, esto enviaría los datos al backend
    alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="contact-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1>Reserva una Cita</h1>
          <p>Estamos aquí para ayudarte. Contáctanos y da el primer paso hacia tu recuperación.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-wrapper">
            
            {/* Contact Info */}
            <div className="contact-info-panel">
              <h2>Información de Contacto</h2>
              <p className="contact-desc">
                Si tienes alguna duda o quieres agendar una cita directamente, 
                no dudes en utilizar cualquiera de los siguientes medios de contacto.
              </p>
              
              <ul className="contact-details-list">
                <li>
                  <div className="cd-icon"><Phone size={24} /></div>
                  <div className="cd-content">
                    <h4>Teléfono</h4>
                    <p>+34 900 123 456</p>
                    <p className="cd-sub">Atención en horario de clínica</p>
                  </div>
                </li>
                <li>
                  <div className="cd-icon"><Mail size={24} /></div>
                  <div className="cd-content">
                    <h4>Email</h4>
                    <p>info@fisiocentro.es</p>
                    <p className="cd-sub">Te responderemos en 24h</p>
                  </div>
                </li>
                <li>
                  <div className="cd-icon"><MapPin size={24} /></div>
                  <div className="cd-content">
                    <h4>Ubicación</h4>
                    <p>Calle Principal 123</p>
                    <p className="cd-sub">28001 Madrid, España</p>
                  </div>
                </li>
                <li>
                  <div className="cd-icon"><Clock size={24} /></div>
                  <div className="cd-content">
                    <h4>Horario</h4>
                    <p>Lunes - Viernes: 09:00 - 21:00</p>
                    <p>Sábados: 09:00 - 14:00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Appointment Form */}
            <div className="contact-form-panel">
              <h2>Solicitud de Cita</h2>
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre y Apellidos</label>
                  <input type="text" id="name" placeholder="Ej. Ana Fernández" required />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="tel" id="phone" placeholder="+34 XXX XXX XXX" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="tu@email.com" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Tratamiento de Interés</label>
                  <select id="service" required>
                    <option value="">Selecciona una opción...</option>
                    <option value="deportiva">Lesión Deportiva</option>
                    <option value="espalda">Dolor de Espalda</option>
                    <option value="masaje">Masoterapia</option>
                    <option value="postoperatorio">Recuperación Post-operatoria</option>
                    <option value="primera">Primera Valoración</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje (Opcional)</label>
                  <textarea id="message" rows={4} placeholder="Cuéntanos brevemente cuál es tu motivo de consulta..." />
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  Enviar Solicitud
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1818136378416!2d-3.6931726845946573!3d40.42674406294711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228905e32ec41%3A0xe7dc282d8c9cc88a!2sC.%20de%20Goya%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1647432014138!5m2!1ses!2ses" 
          width="100%" 
          height="450" 
          style={{ border: 0, display: 'block' }} 
          allowFullScreen={false} 
          loading="lazy"
          title="Ubicación de la Clínica"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
