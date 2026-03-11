import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import './Team.css';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dra. Elena Martínez",
      role: "Fisioterapeuta Colegiada N.º 2451",
      specialty: "Osteopatía y Especialista en Columna",
      image: "https://images.unsplash.com/photo-1594824436998-ef268ee7f804?auto=format&fit=crop&q=80&w=600",
      bio: "Con más de 12 años de experiencia clínica, Elena lidera nuestro departamento de tratamientos de espalda. Formada internacionalmente en técnicas manuales avanzadas.",
      edu: ["Doctorado en Fisioterapia", "Máster en Osteopatía"]
    },
    {
      name: "Carlos Ruiz",
      role: "Fisioterapeuta Colegiado N.º 3182",
      specialty: "Readaptación Deportiva",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
      bio: "Fisioterapeuta oficial de equipos deportivos de élite durante 5 años. Experto en terapias invasivas y ecografía musculoesquelética para una rápida vuelta al deporte.",
      edu: ["Grado en Fisioterapia", "Experto en Fisioterapia Deportiva"]
    },
    {
      name: "Ana Gómez",
      role: "Fisioterapeuta Colegiada N.º 4102",
      specialty: "Rehabilitación Neurológica y Post-operatoria",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
      bio: "Su paciencia y dedicación la hacen excelente en procesos de recuperación largos. Especialista en recuperación traumatológica post-cirugía.",
      edu: ["Grado en Fisioterapia", "Máster en Terapia Manual"]
    }
  ];

  return (
    <div className="team-page animate-fade-in">
        <section className="page-header">
        <div className="container">
          <h1>Nuestro Equipo</h1>
          <p>Conoce a los profesionales al cuidado de tu salud.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <div className="team-info">
                  <h2>{member.name}</h2>
                  <h3 className="team-role">{member.specialty}</h3>
                  <div className="team-num">
                    <Award size={16} /> <span>{member.role}</span>
                  </div>
                  <p className="team-bio">{member.bio}</p>
                  
                  <div className="team-edu">
                    <GraduationCap size={16} className="text-secondary" />
                    <ul>
                      {member.edu.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
