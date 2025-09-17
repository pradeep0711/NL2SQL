import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentQuery, setCurrentQuery] = useState(0);

  const sampleQueries = [
    "Show me all customers who made purchases last month",
    "Find the top 10 products by revenue",
    "Which users haven't logged in for 30 days?",
    "Calculate average order value by region",
    "List all pending orders from premium customers"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(sampleQueries[currentQuery].substring(0, typedText.length + 1));
    }, 100);

    if (typedText === sampleQueries[currentQuery]) {
      setTimeout(() => {
        setTypedText('');
        setCurrentQuery((prev) => (prev + 1) % sampleQueries.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [typedText, currentQuery]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-white fade-in">
              <div className="mb-4">
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill mb-3">
                  <i className="fas fa-brain me-2"></i>
                  Advanced NLP Technology
                </span>
              </div>
              
              <h1 className="display-3 fw-bold mb-4">
                Ask in <span className="text-warning">English</span>.
                <br />
                Get <span className="text-warning">SQL</span> Instantly.
              </h1>
              
              <p className="lead mb-4">
                NL2SQL leverages cutting-edge <strong>Natural Language Processing</strong> 
                and <strong>Large Language Models</strong> to understand your questions 
                and transform them into precise SQL queries with unprecedented accuracy.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-5">
                <Link to="/demo" className="btn btn-light btn-lg px-4 py-3">
                  <i className="fas fa-play me-2"></i>
                  Try NLP Demo
                </Link>
                <Link to="/how-it-works" className="btn btn-outline-light btn-lg px-4 py-3">
                  <i className="fas fa-cogs me-2"></i>
                  See How NLP Works
                </Link>
              </div>
              
              <div className="row text-center">
                <div className="col-4">
                  <div className="h4 mb-1">99.2%</div>
                  <div className="small text-light">NLP Accuracy</div>
                </div>
                <div className="col-4">
                  <div className="h4 mb-1">5ms</div>
                  <div className="small text-light">Query Processing</div>
                </div>
                <div className="col-4">
                  <div className="h4 mb-1">50+</div>
                  <div className="small text-light">Languages Supported</div>
                </div>
              </div>
            </Col>
            
            <Col lg={6} className="text-center">
              <div className="glass rounded-4 p-5 slide-in-right">
                <h5 className="text-white mb-4">
                  <i className="fas fa-comments me-2"></i>
                  Natural Language Input
                </h5>
                
                <div className="bg-dark rounded-3 p-4 mb-4">
                  <div className="text-start">
                    <div className="text-success mb-2">
                      <i className="fas fa-user me-2"></i>
                      User Query:
                    </div>
                    <div className="bg-dark border border-success rounded p-3">
                      <code className="text-light">
                        {typedText}
                        <span className="blinking-cursor">|</span>
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <i className="fas fa-arrow-down text-warning fs-2"></i>
                </div>
                
                <div className="bg-dark rounded-3 p-4">
                  <div className="text-start">
                    <div className="text-info mb-2">
                      <i className="fas fa-database me-2"></i>
                      Generated SQL:
                    </div>
                    <div className="bg-dark border border-info rounded p-3">
                      <code className="text-light small">
                        SELECT c.*, p.amount<br />
                        FROM customers c<br />
                        JOIN purchases p ON c.id = p.customer_id<br />
                        WHERE p.created_at {'>'} '2024-01-01'
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* NLP Features Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold gradient-text mb-3">
                Powered by Advanced NLP
              </h2>
              <p className="lead text-muted">
                Our platform uses state-of-the-art Natural Language Processing 
                techniques to understand context, intent, and complex queries.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="feature-card text-center h-100">
                <div className="mb-4">
                  <i className="fas fa-brain text-primary fs-1"></i>
                </div>
                <h4 className="fw-bold mb-3">Intent Recognition</h4>
                <p className="text-muted">
                  Advanced NLP models understand the intent behind your questions, 
                  whether you want to filter, aggregate, or join data across tables.
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="feature-card text-center h-100">
                <div className="mb-4">
                  <i className="fas fa-search text-primary fs-1"></i>
                </div>
                <h4 className="fw-bold mb-3">Entity Extraction</h4>
                <p className="text-muted">
                  Automatically identifies entities like dates, numbers, table names, 
                  and column references from natural language using NLP techniques.
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="feature-card text-center h-100">
                <div className="mb-4">
                  <i className="fas fa-language text-primary fs-1"></i>
                </div>
                <h4 className="fw-bold mb-3">Context Awareness</h4>
                <p className="text-muted">
                  Understands context and relationships between concepts, 
                  enabling complex multi-table queries from simple English descriptions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Preview */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">
                From Natural Language to SQL in 4 Steps
              </h2>
              
              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ width: '50px', height: '50px' }}>
                    <span className="fw-bold">1</span>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="fw-bold">NLP Processing</h5>
                  <p className="text-muted mb-0">
                    Advanced language models parse your natural language query, 
                    identifying intent, entities, and context.
                  </p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ width: '50px', height: '50px' }}>
                    <span className="fw-bold">2</span>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="fw-bold">Schema Retrieval</h5>
                  <p className="text-muted mb-0">
                    RAG system retrieves relevant database schema and examples 
                    to inform the SQL generation process.
                  </p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ width: '50px', height: '50px' }}>
                    <span className="fw-bold">3</span>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="fw-bold">SQL Generation</h5>
                  <p className="text-muted mb-0">
                    LLM generates optimized SQL queries based on the processed 
                    natural language and retrieved context.
                  </p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ width: '50px', height: '50px' }}>
                    <span className="fw-bold">4</span>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="fw-bold">Execution & Results</h5>
                  <p className="text-muted mb-0">
                    SQL is validated, executed safely, and results are returned 
                    with intelligent visualizations.
                  </p>
                </div>
              </div>
              
              <Link to="/how-it-works" className="btn btn-gradient">
                Learn More About NLP Process
              </Link>
            </Col>
            
            <Col lg={6} className="text-center">
              <div className="position-relative">
                <div className="float">
                  <i className="fas fa-comments text-primary" style={{ fontSize: '8rem' }}></i>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle">
                  <i className="fas fa-arrow-right text-warning fs-1"></i>
                </div>
                <div className="float" style={{ animationDelay: '1s' }}>
                  <i className="fas fa-database text-success" style={{ fontSize: '8rem' }}></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'var(--gradient-primary)' }}>
        <Container className="text-center text-white">
          <h2 className="display-5 fw-bold mb-4">
            Ready to Experience NLP-Powered SQL?
          </h2>
          <p className="lead mb-4">
            Join thousands of developers and data analysts who are already 
            using NL2SQL to query their databases with natural language.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default Home;

