import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = () => {
  const nlpFeatures = [
    {
      icon: "fas fa-brain",
      title: "Advanced NLP Processing",
      description: "State-of-the-art Natural Language Processing models understand context, intent, and complex linguistic patterns in your queries.",
      details: [
        "Intent recognition and classification",
        "Entity extraction and named entity recognition",
        "Semantic understanding and disambiguation",
        "Multi-language support with 50+ languages"
      ]
    },
    {
      icon: "fas fa-language",
      title: "Contextual Understanding",
      description: "Deep learning models analyze context and relationships between concepts to generate accurate SQL queries.",
      details: [
        "Context-aware query processing",
        "Cross-reference table relationships",
        "Temporal and spatial reasoning",
        "Domain-specific vocabulary adaptation"
      ]
    },
    {
      icon: "fas fa-microchip",
      title: "Large Language Models",
      description: "Powered by cutting-edge LLMs including GPT, BERT, and specialized SQL generation models for optimal performance.",
      details: [
        "GPT-4 and Claude integration",
        "Fine-tuned SQL generation models",
        "Retrieval-Augmented Generation (RAG)",
        "Continuous model updates and improvements"
      ]
    },
    {
      icon: "fas fa-search",
      title: "Intelligent Query Analysis",
      description: "Advanced NLP techniques break down complex questions into structured components for precise SQL generation.",
      details: [
        "Query intent classification",
        "Semantic role labeling",
        "Dependency parsing and syntax analysis",
        "Ambiguity resolution algorithms"
      ]
    },
    {
      icon: "fas fa-database",
      title: "Multi-Database Support",
      description: "NLP models adapt to different SQL dialects and database schemas automatically.",
      details: [
        "PostgreSQL, MySQL, SQLite, BigQuery",
        "Snowflake, Redshift, Oracle support",
        "Schema-aware query generation",
        "Dialect-specific optimization"
      ]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Safe NLP Execution",
      description: "Natural language processing includes safety checks and validation to prevent harmful or incorrect queries.",
      details: [
        "Query validation and sanitization",
        "SQL injection prevention",
        "Permission-aware generation",
        "Error handling and recovery"
      ]
    }
  ];

  const technicalSpecs = [
    { label: "NLP Models", value: "GPT-4, Claude, BERT, RoBERTa" },
    { label: "Processing Speed", value: "< 5ms average response" },
    { label: "Accuracy Rate", value: "99.2% query understanding" },
    { label: "Languages Supported", value: "50+ natural languages" },
    { label: "Context Window", value: "32K tokens" },
    { label: "Model Size", value: "7B-175B parameters" }
  ];

  return (
    <div className="py-5">
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'var(--gradient-primary)' }}>
        <Container className="text-center text-white">
          <h1 className="display-4 fw-bold mb-4">
            <i className="fas fa-brain me-3"></i>
            NLP-Powered Features
          </h1>
          <p className="lead mb-4">
            Discover how advanced Natural Language Processing transforms 
            your database interactions into intuitive, human-like conversations.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="glass rounded-4 p-4">
                <h5 className="mb-3">Try These NLP Examples:</h5>
                <div className="row text-start">
                  <div className="col-md-6">
                    <code className="text-light d-block mb-2">
                      "Show me customers who haven't ordered recently"
                    </code>
                    <code className="text-light d-block mb-2">
                      "Find the most popular products this quarter"
                    </code>
                  </div>
                  <div className="col-md-6">
                    <code className="text-light d-block mb-2">
                      "Which users are at risk of churning?"
                    </code>
                    <code className="text-light d-block mb-2">
                      "Compare sales performance by region"
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* NLP Features Grid */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold gradient-text mb-3">
                Advanced NLP Capabilities
              </h2>
              <p className="lead text-muted">
                Our platform leverages cutting-edge Natural Language Processing 
                to understand and process complex human queries with unprecedented accuracy.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {nlpFeatures.map((feature, index) => (
              <Col lg={6} key={index}>
                <div className="feature-card h-100">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-4">
                      <div className="bg-primary text-white rounded-3 p-3">
                        <i className={`${feature.icon} fs-3`}></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="fw-bold mb-3">{feature.title}</h4>
                      <p className="text-muted mb-3">{feature.description}</p>
                      <ul className="list-unstyled">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="mb-2">
                            <i className="fas fa-check text-success me-2"></i>
                            <span className="text-muted">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technical Specifications */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">
                NLP Technical Specifications
              </h2>
              <p className="lead text-muted mb-4">
                Built with enterprise-grade Natural Language Processing infrastructure 
                to handle complex queries at scale with high accuracy and speed.
              </p>
              
              <div className="row">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                           style={{ width: '40px', height: '40px' }}>
                        <i className="fas fa-cog"></i>
                      </div>
                      <div>
                        <div className="fw-bold">{spec.label}</div>
                        <div className="text-muted small">{spec.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="text-center">
                <div className="position-relative d-inline-block">
                  <div className="bg-white rounded-4 p-5 shadow-lg">
                    <h5 className="fw-bold mb-4">NLP Processing Pipeline</h5>
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '30px', height: '30px' }}>
                          <span className="small">1</span>
                        </div>
                        <span>Tokenization & Preprocessing</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '30px', height: '30px' }}>
                          <span className="small">2</span>
                        </div>
                        <span>Intent Classification</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '30px', height: '30px' }}>
                          <span className="small">3</span>
                        </div>
                        <span>Entity Recognition</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '30px', height: '30px' }}>
                          <span className="small">4</span>
                        </div>
                        <span>Context Analysis</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '30px', height: '30px' }}>
                          <span className="small">5</span>
                        </div>
                        <span>SQL Generation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* NLP Use Cases */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold gradient-text mb-3">
                NLP Use Cases & Applications
              </h2>
              <p className="lead text-muted">
                See how Natural Language Processing transforms different industries 
                and use cases with intelligent query understanding.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-chart-line fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Business Analytics</h5>
                <p className="text-muted">
                  "Show me revenue trends by quarter" → Complex analytical queries 
                  with grouping, aggregation, and time-based filtering.
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="text-center">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-users fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Customer Analytics</h5>
                <p className="text-muted">
                  "Find customers at risk of churning" → Multi-table joins with 
                  behavioral analysis and predictive modeling.
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="text-center">
                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-shopping-cart fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">E-commerce</h5>
                <p className="text-muted">
                  "What are the top-selling products this month?" → Product 
                  performance analysis with sales metrics and trends.
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="text-center">
                <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-hospital fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Healthcare</h5>
                <p className="text-muted">
                  "Show patients with high-risk conditions" → Medical data analysis 
                  with complex filtering and classification logic.
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="text-center">
                <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-graduation-cap fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Education</h5>
                <p className="text-muted">
                  "Which students are struggling academically?" → Student performance 
                  analysis with grade trends and attendance patterns.
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="text-center">
                <div className="bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-industry fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Manufacturing</h5>
                <p className="text-muted">
                  "Find production bottlenecks this week" → Operational data analysis 
                  with efficiency metrics and performance indicators.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'var(--gradient-secondary)' }}>
        <Container className="text-center text-white">
          <h2 className="display-5 fw-bold mb-4">
            Experience the Power of NLP
          </h2>
          <p className="lead mb-4">
            Ready to transform your database queries with Natural Language Processing? 
            Try our interactive demo and see the magic in action.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/demo" className="btn btn-light btn-lg px-4">
              <i className="fas fa-play me-2"></i>
              Try NLP Demo
            </a>
            <a href="/docs" className="btn btn-outline-light btn-lg px-4">
              <i className="fas fa-book me-2"></i>
              Read NLP Documentation
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Features;
