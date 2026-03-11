import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Shield, Star, Clock } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-badge">Clínica Especializada</span>
          <h1>Recupera tu movilidad, <br/>mejora tu calidad de vida.</h1>
          <p className="hero-subtitle">
            Tratamientos de fisioterapia personalizados en manos de expertos. 
            Vuelve a tu mejor versión con nuestro enfoque integral.
          </p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn btn-primary">Reservar Cita Ahora</Link>
            <Link to="/tratamientos" className="btn btn-secondary hero-btn-secondary">Nuestros Servicios</Link>
          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Activity size={32} /></div>
              <h3>Tecnología Avanzada</h3>
              <p>Equipamiento de última generación para una recuperación más rápida y efectiva.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Heart size={32} /></div>
              <h3>Trato Personalizado</h3>
              <p>Cada paciente es único. Diseñamos un plan de tratamiento 100% adaptado a ti.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Shield size={32} /></div>
              <h3>Profesionales Expertos</h3>
              <p>Fisioterapeutas colegiados con amplia experiencia clínica y deportiva.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Overview */}
      <section className="treatments-preview bg-light section">
        <div className="container">
          <div className="section-title">
            <span>Nuestras Especialidades</span>
            <h2>Tratamientos Principales</h2>
          </div>
          
          <div className="treatments-grid">
            {[
              { title: "Lesiones Deportivas", desc: "Recuperación acelerada para atletas y deportistas amateur. Esguinces, roturas fibrilares.", icon: "🏃" },
              { title: "Dolor de Espalda", desc: "Alivio para cervicalgias, lumbalgias y hernias. Corrección postural y fortalecimiento.", icon: "🧘" },
              { title: "Masoterapia", desc: "Masajes terapéuticos para descargar tensión muscular y mejorar la circulación.", icon: "💆" },
              { title: "Post-operatorio", desc: "Rehabilitación guiada tras cirugías traumatológicas para recuperar la funcionalidad plena.", icon: "⚕️" },
            ].map((treatment, idx) => (
              <div key={idx} className="treatment-card">
                <div className="treatment-emoji">{treatment.icon}</div>
                <h3>{treatment.title}</h3>
                <p>{treatment.desc}</p>
                <Link to="/tratamientos" className="treatment-link">
                  Saber más <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/tratamientos" className="btn btn-primary">Ver todos los tratamientos</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-title">
            <span>Experiencias Reales</span>
            <h2>Lo que dicen nuestros pacientes</h2>
          </div>
          
          <div className="testimonials-grid">
            {[
              { name: "Carlos M.", text: "Tras meses con dolor de hombro, en FisioCentro encontraron la causa en la primera sesión. En un mes estaba como nuevo.", rating: 5 },
              { name: "Laura G.", text: "Trato inmejorable e instalaciones impecables. Su programa de readaptación deportiva me permitió volver a correr tras mi lesión.", rating: 5 },
              { name: "Antonio R.", text: "Excelentes profesionales. Fui por problemas crónicos de espalda tras la cirugía, y su dedicación ha cambiado mi día a día enormemente.", rating: 5 },
            ].map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-content">
            <h2>¿Necesitas ayuda con tu lesión?</h2>
            <p>No dejes que el dolor te frene. Consulta con nuestros especialistas hoy mismo.</p>
          </div>
          <div className="cta-action">
            <div className="contact-pill">
              <Clock size={24} />
              <div>
                <strong>Llamanos hoy:</strong>
                <span>+34 900 123 456</span>
              </div>
            </div>
            <Link to="/contacto" className="btn btn-primary btn-large">Solicitar Cita Online</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
