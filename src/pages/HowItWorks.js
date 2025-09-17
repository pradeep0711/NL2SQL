import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nlpProcess = [
    {
      step: 1,
      title: "Natural Language Input",
      icon: "fas fa-comments",
      description: "User submits a question in natural language",
      details: [
        "Advanced NLP preprocessing",
        "Tokenization and normalization",
        "Language detection and classification",
        "Context extraction and analysis"
      ],
      example: {
        input: "Show me all customers who made purchases last month",
        output: "Processed tokens: [show, me, all, customers, who, made, purchases, last, month]"
      }
    },
    {
      step: 2,
      title: "Intent Recognition & Entity Extraction",
      icon: "fas fa-brain",
      description: "NLP models analyze intent and extract entities",
      details: [
        "Intent classification (SELECT, JOIN, FILTER, etc.)",
        "Named Entity Recognition (NER)",
        "Temporal entity extraction",
        "Semantic role labeling"
      ],
      example: {
        input: "Intent: DATA_RETRIEVAL | Entities: [customers, purchases, last_month]",
        output: "Intent: SELECT | Tables: [customers, orders] | Time: [last_month]"
      }
    },
    {
      step: 3,
      title: "Schema Retrieval & Context Building",
      icon: "fas fa-database",
      description: "RAG system retrieves relevant database schema",
      details: [
        "Vector similarity search",
        "Schema matching and mapping",
        "Example query retrieval",
        "Context window construction"
      ],
      example: {
        input: "Retrieved schema: customers(id, name, email), orders(id, customer_id, amount, date)",
        output: "Context: Table relationships and column mappings identified"
      }
    },
    {
      step: 4,
      title: "LLM SQL Generation",
      icon: "fas fa-microchip",
      description: "Large Language Model generates SQL query",
      details: [
        "Context-aware prompt engineering",
        "SQL syntax generation",
        "Query optimization",
        "Safety validation"
      ],
      example: {
        input: "Generated SQL with context and examples",
        output: "SELECT c.* FROM customers c JOIN orders o ON c.id = o.customer_id WHERE o.date >= '2024-01-01'"
      }
    },
    {
      step: 5,
      title: "Validation & Execution",
      icon: "fas fa-shield-alt",
      description: "SQL validation and safe execution",
      details: [
        "Syntax validation",
        "Permission checking",
        "SQL injection prevention",
        "Result formatting"
      ],
      example: {
        input: "Validated SQL query",
        output: "Executed safely with results returned as structured data"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % nlpProcess.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5">
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'var(--gradient-primary)' }}>
        <Container className="text-center text-white">
          <h1 className="display-4 fw-bold mb-4">
            <i className="fas fa-cogs me-3"></i>
            How NLP Powers NL2SQL
          </h1>
          <p className="lead mb-4">
            Discover the sophisticated Natural Language Processing pipeline that transforms 
            your questions into precise SQL queries using cutting-edge AI technology.
          </p>
        </Container>
      </section>

      {/* Interactive Process Flow */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold gradient-text mb-3">
                NLP Processing Pipeline
              </h2>
              <p className="lead text-muted">
                Our advanced Natural Language Processing system uses multiple AI models 
                working together to understand and process your queries.
              </p>
            </Col>
          </Row>

          {/* Process Steps */}
          <Row className="g-4 mb-5">
            {nlpProcess.map((process, index) => (
              <Col lg={12} key={index}>
                <Card 
                  className={`h-100 border-0 shadow-lg transition-all ${
                    activeStep === index ? 'border-primary border-3' : ''
                  }`}
                  style={{
                    transition: 'all 0.3s ease',
                    transform: activeStep === index ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      <Col md={1} className="text-center">
                        <div 
                          className={`rounded-circle d-flex align-items-center justify-content-center mx-auto ${
                            activeStep === index ? 'bg-primary text-white' : 'bg-light text-dark'
                          }`}
                          style={{ width: '60px', height: '60px' }}
                        >
                          <i className={`${process.icon} fs-4`}></i>
                        </div>
                      </Col>
                      
                      <Col md={11}>
                        <div className="d-flex align-items-center mb-3">
                          <h4 className="fw-bold mb-0 me-3">{process.title}</h4>
                          <span className="badge bg-secondary">Step {process.step}</span>
                        </div>
                        
                        <p className="text-muted mb-3">{process.description}</p>
                        
                        <Row>
                          <Col md={6}>
                            <h6 className="fw-bold mb-2">NLP Techniques:</h6>
                            <ul className="list-unstyled">
                              {process.details.map((detail, idx) => (
                                <li key={idx} className="mb-1">
                                  <i className="fas fa-check text-success me-2"></i>
                                  <span className="text-muted small">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </Col>
                          
                          <Col md={6}>
                            <div className="bg-light rounded p-3">
                              <h6 className="fw-bold mb-2">Example:</h6>
                              <div className="mb-2">
                                <small className="text-muted">Input:</small>
                                <div className="bg-dark text-light rounded p-2 mt-1">
                                  <code className="small">{process.example.input}</code>
                                </div>
                              </div>
                              <div>
                                <small className="text-muted">Output:</small>
                                <div className="bg-dark text-light rounded p-2 mt-1">
                                  <code className="small">{process.example.output}</code>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Process Flow Diagram */}
          <Row className="mb-5">
            <Col>
              <div className="text-center">
                <h3 className="fw-bold mb-4">Complete NLP Flow Visualization</h3>
                <div className="position-relative">
                  <div className="d-flex justify-content-between align-items-center">
                    {nlpProcess.map((process, index) => (
                      <div key={index} className="text-center flex-fill">
                        <div 
                          className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-3 ${
                            activeStep === index ? 'bg-primary text-white' : 'bg-light text-dark'
                          }`}
                          style={{ width: '80px', height: '80px' }}
                        >
                          <i className={`${process.icon} fs-4`}></i>
                        </div>
                        <h6 className="fw-bold">{process.title}</h6>
                        {index < nlpProcess.length - 1 && (
                          <div className="d-none d-md-block">
                            <i className="fas fa-arrow-right text-primary fs-3"></i>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* NLP Technology Stack */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold gradient-text mb-3">
                NLP Technology Stack
              </h2>
              <p className="lead text-muted">
                Built on the latest Natural Language Processing technologies and frameworks.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={3} md={6}>
              <div className="text-center">
                <div className="bg-primary text-white rounded-3 p-4 mb-3">
                  <i className="fas fa-robot fs-1"></i>
                </div>
                <h5 className="fw-bold">Large Language Models</h5>
                <ul className="list-unstyled text-muted">
                  <li>GPT-4 & GPT-3.5</li>
                  <li>Claude 3</li>
                  <li>BERT & RoBERTa</li>
                  <li>Fine-tuned SQL models</li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="text-center">
                <div className="bg-success text-white rounded-3 p-4 mb-3">
                  <i className="fas fa-search fs-1"></i>
                </div>
                <h5 className="fw-bold">NLP Libraries</h5>
                <ul className="list-unstyled text-muted">
                  <li>spaCy & NLTK</li>
                  <li>Transformers</li>
                  <li>Hugging Face</li>
                  <li>OpenAI API</li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="text-center">
                <div className="bg-warning text-white rounded-3 p-4 mb-3">
                  <i className="fas fa-database fs-1"></i>
                </div>
                <h5 className="fw-bold">Vector Databases</h5>
                <ul className="list-unstyled text-muted">
                  <li>Pinecone</li>
                  <li>Weaviate</li>
                  <li>Chroma</li>
                  <li>FAISS</li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="text-center">
                <div className="bg-info text-white rounded-3 p-4 mb-3">
                  <i className="fas fa-cogs fs-1"></i>
                </div>
                <h5 className="fw-bold">Processing</h5>
                <ul className="list-unstyled text-muted">
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>ONNX Runtime</li>
                  <li>CUDA acceleration</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Performance Metrics */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">
                NLP Performance Metrics
              </h2>
              <p className="lead text-muted mb-4">
                Our Natural Language Processing system delivers exceptional performance 
                with industry-leading accuracy and speed.
              </p>

              <div className="row">
                <div className="col-6 mb-4">
                  <div className="text-center">
                    <div className="display-6 fw-bold text-primary mb-2">99.2%</div>
                    <div className="text-muted">Query Understanding Accuracy</div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="text-center">
                    <div className="display-6 fw-bold text-success mb-2">&lt; 5ms</div>
                    <div className="text-muted">Average Processing Time</div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="text-center">
                    <div className="display-6 fw-bold text-warning mb-2">50+</div>
                    <div className="text-muted">Supported Languages</div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="text-center">
                    <div className="display-6 fw-bold text-info mb-2">32K</div>
                    <div className="text-muted">Context Window Tokens</div>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="glass rounded-4 p-4">
                <h5 className="fw-bold mb-4 text-center">NLP Processing Speed</h5>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Tokenization</span>
                  <span className="badge bg-success">0.1ms</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Intent Classification</span>
                  <span className="badge bg-success">1.2ms</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Entity Extraction</span>
                  <span className="badge bg-warning">2.1ms</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Context Building</span>
                  <span className="badge bg-info">0.8ms</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>SQL Generation</span>
                  <span className="badge bg-primary">0.8ms</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">Total Processing Time</span>
                  <span className="badge bg-dark fs-6">&lt; 5ms</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'var(--gradient-secondary)' }}>
        <Container className="text-center text-white">
          <h2 className="display-5 fw-bold mb-4">
            Ready to Experience Advanced NLP?
          </h2>
          <p className="lead mb-4">
            See how our sophisticated Natural Language Processing transforms 
            your database interactions into seamless conversations.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/demo" className="btn btn-light btn-lg px-4">
              <i className="fas fa-play me-2"></i>
              Try NLP Demo
            </a>
            <a href="/features" className="btn btn-outline-light btn-lg px-4">
              <i className="fas fa-star me-2"></i>
              Explore Features
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HowItWorks;
