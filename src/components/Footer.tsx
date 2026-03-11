import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="logo footer-logo">
              <Activity className="logo-icon" />
              <div className="logo-text">
                <span className="logo-title">FisioCentro</span>
                <span className="logo-subtitle">Salud & Recuperación</span>
              </div>
            </Link>
            <p className="footer-desc">
              Clínica de fisioterapia dedicada a tu bienestar. Especialistas en recuperación deportiva, rehabilitación y tratamientos personalizados para mejorar tu calidad de vida.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/tratamientos">Tratamientos</Link></li>
              <li><Link to="/equipo">Nuestro Equipo</Link></li>
              <li><Link to="/nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3>Tratamientos</h3>
            <ul className="footer-links">
              <li><Link to="/tratamientos">Lesiones Deportivas</Link></li>
              <li><Link to="/tratamientos">Dolor de Espalda</Link></li>
              <li><Link to="/tratamientos">Masoterapia</Link></li>
              <li><Link to="/tratamientos">Post-operatorio</Link></li>
              <li><Link to="/tratamientos">Fisioterapia General</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3>Contacto</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Calle Principal 123, 28001 Madrid, España</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+34 900 123 456</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@fisiocentro.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FisioCentro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
