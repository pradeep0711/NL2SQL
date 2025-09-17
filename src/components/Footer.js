import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', path: '/features' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Demo', path: '/demo' },
      { label: 'API Docs', path: '/docs' }
    ],
    Resources: [
      { label: 'Documentation', path: '/docs' }
    ],
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: 'mailto:contact@nl2sql.com' }
    ]
  };

  return (
    <footer className="bg-dark text-light py-5 mt-5" style={{ 
      fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif'
    }}>
      <Container>
        <Row>
          <Col lg={4} className="mb-4">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-primary rounded-circle p-3 me-3">
                <i className="fas fa-database fs-2 text-white"></i>
              </div>
              <div>
                <span className="fs-2 fw-bold text-white" style={{ 
                  fontFamily: '"Poppins", "Inter", sans-serif',
                  letterSpacing: '1px'
                }}>NL2SQL</span>
                <div className="text-muted small">Natural Language to SQL</div>
              </div>
            </div>
            <p className="text-light mb-4 lh-lg" style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#d1d5db'
            }}>
              Advanced NLP-powered platform that transforms natural language queries 
              into precise SQL commands using state-of-the-art language models and 
              retrieval-augmented generation.
            </p>
          </Col>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <Col lg={2} md={6} className="mb-4" key={title}>
              <h6 className="fw-bold mb-4 text-white" style={{ 
                fontFamily: '"Poppins", "Inter", sans-serif',
                fontSize: '1.1rem',
                letterSpacing: '0.5px'
              }}>{title}</h6>
              <ul className="list-unstyled">
                {links.map((link, index) => (
                  <li key={index} className="mb-3">
                    {link.href ? (
                      <a href={link.href} className="text-light text-decoration-none d-flex align-items-center" 
                         style={{ 
                           fontSize: '1rem',
                           transition: 'all 0.3s ease',
                           fontFamily: '"Inter", sans-serif',
                           color: '#d1d5db'
                         }}
                         onMouseEnter={(e) => {
                           e.target.style.color = '#ffffff';
                           e.target.style.transform = 'translateX(5px)';
                         }}
                         onMouseLeave={(e) => {
                           e.target.style.color = '#d1d5db';
                           e.target.style.transform = 'translateX(0)';
                         }}>
                        <i className="fas fa-arrow-right me-2" style={{ fontSize: '0.8rem' }}></i>
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.path} className="text-light text-decoration-none d-flex align-items-center"
                            style={{ 
                              fontSize: '1rem',
                              transition: 'all 0.3s ease',
                              fontFamily: '"Inter", sans-serif',
                              color: '#d1d5db'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.color = '#ffffff';
                              e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = '#d1d5db';
                              e.target.style.transform = 'translateX(0)';
                            }}>
                        <i className="fas fa-arrow-right me-2" style={{ fontSize: '0.8rem' }}></i>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-4 text-white" style={{ 
              fontFamily: '"Poppins", "Inter", sans-serif',
              fontSize: '1.1rem',
              letterSpacing: '0.5px'
            }}>NLP Features</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <span className="text-light d-flex align-items-center" style={{ 
                  fontSize: '1rem',
                  fontFamily: '"Inter", sans-serif',
                  color: '#d1d5db'
                }}>
                  <i className="fas fa-brain me-2 text-primary" style={{ fontSize: '0.8rem' }}></i>
                  Intent Recognition
                </span>
              </li>
              <li className="mb-3">
                <span className="text-light d-flex align-items-center" style={{ 
                  fontSize: '1rem',
                  fontFamily: '"Inter", sans-serif',
                  color: '#d1d5db'
                }}>
                  <i className="fas fa-search me-2 text-primary" style={{ fontSize: '0.8rem' }}></i>
                  Entity Extraction
                </span>
              </li>
              <li className="mb-3">
                <span className="text-light d-flex align-items-center" style={{ 
                  fontSize: '1rem',
                  fontFamily: '"Inter", sans-serif',
                  color: '#d1d5db'
                }}>
                  <i className="fas fa-lightbulb me-2 text-primary" style={{ fontSize: '0.8rem' }}></i>
                  Query Understanding
                </span>
              </li>
              <li className="mb-3">
                <span className="text-light d-flex align-items-center" style={{ 
                  fontSize: '1rem',
                  fontFamily: '"Inter", sans-serif',
                  color: '#d1d5db'
                }}>
                  <i className="fas fa-language me-2 text-primary" style={{ fontSize: '0.8rem' }}></i>
                  Context Awareness
                </span>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-5" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Row className="align-items-center">
          <Col md={12} className="text-center">
            <p className="mb-0 text-light" style={{ 
              fontSize: '1rem',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.5px',
              color: '#d1d5db'
            }}>
              © {currentYear} <span className="fw-bold text-white">NL2SQL</span>. All rights reserved. 
              <span className="d-block mt-2" style={{ fontSize: '0.9rem' }}>
                Powered by pradeep0711
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

