import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Activity, Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <Activity className="logo-icon" />
          <div className="logo-text">
            <span className="logo-title">FisioCentro</span>
            <span className="logo-subtitle">Salud & Recuperación</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink></li>
            <li><NavLink to="/tratamientos" className={({isActive}) => isActive ? 'active' : ''}>Tratamientos</NavLink></li>
            <li><NavLink to="/equipo" className={({isActive}) => isActive ? 'active' : ''}>Equipo</NavLink></li>
            <li><NavLink to="/nosotros" className={({isActive}) => isActive ? 'active' : ''}>Nosotros</NavLink></li>
            <li><NavLink to="/contacto" className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+34900123456" className="phone-contact hidden-mobile">
            <Phone size={18} />
            <span>900 123 456</span>
          </a>
          <Link to="/contacto" className="btn btn-primary btn-sm hidden-mobile">Reservar Cita</Link>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
            <li><NavLink to="/" end onClick={closeMenu}>Inicio</NavLink></li>
            <li><NavLink to="/tratamientos" onClick={closeMenu}>Tratamientos</NavLink></li>
            <li><NavLink to="/equipo" onClick={closeMenu}>Equipo</NavLink></li>
            <li><NavLink to="/nosotros" onClick={closeMenu}>Nosotros</NavLink></li>
            <li><NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink></li>
            <li><Link to="/contacto" className="btn btn-primary mobile-btn" onClick={closeMenu}>Reservar Cita</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
