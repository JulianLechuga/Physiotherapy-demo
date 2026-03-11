import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Treatments.css';

const Treatments: React.FC = () => {
  const treatmentsList = [
    {
      id: "deportivas",
      title: "Lesiones Deportivas",
      icon: "🏃",
      desc: "Tratamiento específico para atletas y personas activas, enfocado en una recuperación rápida y segura para volver al deporte.",
      benefits: [
        "Esguinces y distensiones musculares",
        "Roturas de fibras y tendinopatías",
        "Readaptación al esfuerzo",
        "Prevención de recaídas deportivas"
      ]
    },
    {
      id: "espalda",
      title: "Dolor de Espalda",
      icon: "🧘",
      desc: "Abordaje integral del dolor de columna, trabajando la causa subyacente para proporcionar alivio a largo plazo.",
      benefits: [
        "Cervicalgias, dorsalgias y lumbalgias",
        "Tratamiento de hernias discales",
        "Corrección postural",
        "Fortalecimiento del core"
      ]
    },
    {
      id: "masoterapia",
      title: "Masoterapia",
      icon: "💆",
      desc: "Técnicas manuales profundas para aliviar tensiones, mejorar la circulación y promover la relajación muscular.",
      benefits: [
        "Masaje descontracturante",
        "Drenaje linfático manual",
        "Liberación miofascial",
        "Masaje deportivo pre y post competición"
      ]
    },
    {
      id: "post-operatorio",
      title: "Recuperación Post-quirúrgica",
      icon: "⚕️",
      desc: "Rehabilitación pautada y progresiva tras intervenciones traumatológicas para recuperar la movilidad plena.",
      benefits: [
        "Cirugía de rodilla (prótesis, menisco, LCA)",
        "Cirugía de cadera y hombro",
        "Reducción de edema y dolor temprano",
        "Recuperación del rango articular y fuerza"
      ]
    },
    {
      id: "sesiones",
      title: "Fisioterapia General",
      icon: "👐",
      desc: "Sesiones personalizadas para tratar una amplia variedad de dolencias musculoesqueléticas comunes.",
      benefits: [
        "Tratamiento de artrosis y artritis",
        "Recuperación tras inmovilización prolongada",
        "Reeducación propioceptiva",
        "Mejora global de la movilidad"
      ]
    }
  ];

  return (
    <div className="treatments-page animate-fade-in">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Nuestros Tratamientos</h1>
          <p>Especialidades enfocadas en tu recuperación y bienestar integral.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-light">
        <div className="container">
          <div className="treatments-wrapper">
            {treatmentsList.map((tm, idx) => (
              <div key={idx} id={tm.id} className="treatment-detail-card">
                <div className="tm-icon-wrapper">{tm.icon}</div>
                <div className="tm-content">
                  <h2>{tm.title}</h2>
                  <p className="tm-desc">{tm.desc}</p>
                  
                  <h4>¿Qué tratamos?</h4>
                  <ul className="tm-benefits">
                    {tm.benefits.map((benefit, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className="text-secondary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contacto" className="btn btn-secondary mt-3">Agendar Sesión</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Book */}
      <section className="bg-primary text-white text-center section">
        <div className="container">
          <h2>¿No estás seguro de qué tratamiento necesitas?</h2>
          <p className="max-w-xl mx-auto mb-4" style={{ margin: '1rem auto 2rem' }}>
            Reserva una consulta de valoración inicial. Nuestros fisioterapeutas evaluarán tu caso
            y diseñarán el plan de tratamiento más adecuado para ti.
          </p>
          <Link to="/contacto" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
            Valoración Inicial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
