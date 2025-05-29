import React from 'react';
import './Footer.css';
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Sara's App</h2>
          <p>Aprender nunca fue tan divertido ✨</p>
        </div>
        <div className="footer-links">
          <h4>Enlaces útiles</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/actividades">Actividades</a></li>
            <li><a href="/recursos">Recursos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p><FaEnvelope /> saraProfe@gmail.com</p>
          <div className="footer-socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Sara's App. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
