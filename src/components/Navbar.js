import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/demo', label: 'Demo' },
    { path: '/docs', label: 'Docs' }
  ];

  return (
    <BSNavbar 
      expand="lg" 
      className={`navbar-custom fixed-top ${isScrolled ? 'scrolled' : ''}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="fw-bold">
          <i className="fas fa-database me-2"></i>
          <span className="gradient-text">NL2SQL</span>
        </BSNavbar.Brand>
        
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                className={`mx-2 ${
                  location.pathname === link.path ? 'active' : ''
                }`}
                style={{
                  fontWeight: location.pathname === link.path ? '600' : '400',
                  color: location.pathname === link.path ? 'var(--primary-color)' : 'inherit'
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          
          <Nav className="ms-auto">
            <button
              onClick={toggleDarkMode}
              className="btn btn-outline-secondary border-0 me-3"
              style={{
                background: 'transparent',
                borderRadius: '50px',
                padding: '8px 12px',
                transition: 'all 0.3s ease'
              }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            
            <Link to="/demo" className="btn btn-gradient me-2">
              Try Demo
            </Link>
            
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;

