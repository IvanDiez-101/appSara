import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2C3E50',
      color: 'white',
      padding: '10px 0',
      textAlign: 'center',
      position: 'relative',
      bottom: '0',
      width: '100%',
    }}>
      <p>&copy; 2025 Sara's App. Todos los derechos reservados.</p>
      <p>
        <a href="mailto:contacto@ejemplo.com" style={{
          color: 'white',
          textDecoration: 'none',
        }}>
          Contáctanos
        </a>
      </p>
    </footer>
  );
}

export default Footer;
