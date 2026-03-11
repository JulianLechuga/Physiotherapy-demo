import React from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page animate-fade-in">
      <section className="page-header">
        <div className="container">
          <h1>Sobre Nosotros</h1>
          <p>Pasión por la fisioterapia y compromiso con tu salud.</p>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" 
                alt="Clínica por dentro" 
              />
              <div className="experience-badge">
                <span className="exp-years">+12</span>
                <span className="exp-text">Años de<br/>Experiencia</span>
              </div>
            </div>
            
            <div className="about-content">
              <span className="section-label">Nuestra Filosofía</span>
              <h2>Cuidamos de ti con un enfoque humano y profesional</h2>
              <p className="lead-text">
                En FisioCentro entendemos que cada lesión y cada paciente son únicos. Nuestro enfoque 
                se basa en un diagnóstico preciso y un tratamiento completamente individualizado.
              </p>
              <p>
                Fundada en 2012, nuestra clínica nació con el objetivo de ofrecer una fisioterapia de 
                calidad, alejada de los tratamientos protocolarios genéricos. Creemos firmemente en el 
                terapia manual y el ejercicio terapéutico como pilares fundamentales de una recuperación exitosa.
              </p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-num">5000+</div>
                  <div className="stat-label">Pacientes Recuperados</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">98%</div>
                  <div className="stat-label">Tasa de Satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <span>¿Por qué elegirnos?</span>
            <h2>Nuestros Valores</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <Target className="value-icon" size={40} />
              <h3>Diagnóstico Preciso</h3>
              <p>Buscamos el origen del problema, no solo tratamos el síntoma, para evitar recaídas.</p>
            </div>
            <div className="value-card">
              <Heart className="value-icon" size={40} />
              <h3>Empatía y Cuidado</h3>
              <p>Te acompañamos en todo tu proceso de recuperación ofreciéndote apoyo y comprensión.</p>
            </div>
            <div className="value-card">
              <Award className="value-icon" size={40} />
              <h3>Formación Continua</h3>
              <p>Nuestro equipo está en constante formación para aplicar las técnicas más vanguardistas.</p>
            </div>
            <div className="value-card">
              <Users className="value-icon" size={40} />
              <h3>Tratamiento 1 a 1</h3>
              <p>Sesiones individuales donde el fisioterapeuta está 100% centrado en ti.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
