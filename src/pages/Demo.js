import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Demo = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const sampleQueries = [
    "Show me all customers who made purchases last month",
    "Find the top 10 products by revenue",
    "Which users haven't logged in for 30 days?",
    "Calculate average order value by region",
    "List all pending orders from premium customers",
    "Show me sales performance this quarter vs last quarter",
    "Find customers with the highest lifetime value",
    "Which products are out of stock in our main warehouse?"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Simulate API call with NLP processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock NLP processing result
      const mockResult = {
        originalQuery: query,
        nlpAnalysis: {
          intent: "DATA_RETRIEVAL",
          entities: ["customers", "purchases", "last month"],
          confidence: 0.95,
          processingTime: "4.2ms"
        },
        generatedSQL: `SELECT c.id, c.name, c.email, o.amount, o.created_at
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
ORDER BY o.created_at DESC;`,
        explanation: "This query retrieves customer information along with their purchase details from the last month. The NLP system identified the intent as data retrieval, extracted entities like 'customers', 'purchases', and 'last month', then generated an optimized SQL query with proper joins and date filtering.",
        sampleResults: [
          { id: 1, name: "John Doe", email: "john@example.com", amount: 299.99, created_at: "2024-01-15" },
          { id: 2, name: "Jane Smith", email: "jane@example.com", amount: 149.50, created_at: "2024-01-14" },
          { id: 3, name: "Bob Johnson", email: "bob@example.com", amount: 89.99, created_at: "2024-01-13" }
        ]
      };

      setResult(mockResult);
    } catch (err) {
      setError('Failed to process query. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSampleQuery = (sampleQuery) => {
    setQuery(sampleQuery);
  };

  return (
    <div className="py-5">
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'var(--gradient-primary)' }}>
        <Container className="text-center text-white">
          <h1 className="display-4 fw-bold mb-4">
            <i className="fas fa-play-circle me-3"></i>
            Interactive NLP Demo
          </h1>
          <p className="lead mb-4">
            Experience the power of Natural Language Processing in action. 
            Ask questions in plain English and watch as our AI transforms them into SQL.
          </p>
        </Container>
      </section>

      {/* Demo Interface */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-4 text-center">
                    <i className="fas fa-comments text-primary me-2"></i>
                    Try Our NLP-Powered SQL Generator
                  </h3>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">
                        <i className="fas fa-brain me-2 text-primary"></i>
                        Ask your database a question:
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="e.g., 'Show me all customers who made purchases last month'"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="border-2"
                        style={{ fontSize: '1.1rem' }}
                      />
                      <Form.Text className="text-muted">
                        Our NLP system understands natural language and converts it to SQL automatically.
                      </Form.Text>
                    </Form.Group>

                    <div className="text-center mb-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="btn-gradient px-5"
                        disabled={loading || !query.trim()}
                      >
                        {loading ? (
                          <>
                            <Spinner animation="border" size="sm" className="me-2" />
                            Processing with NLP...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-magic me-2"></i>
                            Generate SQL with NLP
                          </>
                        )}
                      </Button>
                    </div>
                  </Form>

                  {/* Sample Queries */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">
                      <i className="fas fa-lightbulb me-2 text-warning"></i>
                      Try these sample queries:
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {sampleQueries.slice(0, 4).map((sample, index) => (
                        <Button
                          key={index}
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleSampleQuery(sample)}
                          className="mb-2"
                        >
                          {sample}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Error Display */}
                  {error && (
                    <Alert variant="danger" className="mb-4">
                      <i className="fas fa-exclamation-triangle me-2"></i>
                      {error}
                    </Alert>
                  )}

                  {/* Results Display */}
                  {result && (
                    <div className="mt-4">
                      <h5 className="fw-bold mb-3">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        NLP Processing Results
                      </h5>

                      {/* NLP Analysis */}
                      <Card className="mb-4 border-primary">
                        <Card.Header className="bg-primary text-white">
                          <h6 className="mb-0">
                            <i className="fas fa-brain me-2"></i>
                            Natural Language Processing Analysis
                          </h6>
                        </Card.Header>
                        <Card.Body>
                          <Row>
                            <Col md={6}>
                              <div className="mb-2">
                                <strong>Intent:</strong> 
                                <span className="badge bg-success ms-2">{result.nlpAnalysis.intent}</span>
                              </div>
                              <div className="mb-2">
                                <strong>Entities:</strong>
                                <div className="mt-1">
                                  {result.nlpAnalysis.entities.map((entity, idx) => (
                                    <span key={idx} className="badge bg-info me-1">{entity}</span>
                                  ))}
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="mb-2">
                                <strong>Confidence:</strong> 
                                <span className="text-success ms-2">
                                  {(result.nlpAnalysis.confidence * 100).toFixed(1)}%
                                </span>
                              </div>
                              <div className="mb-2">
                                <strong>Processing Time:</strong> 
                                <span className="text-primary ms-2">{result.nlpAnalysis.processingTime}</span>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>

                      {/* Generated SQL */}
                      <Card className="mb-4">
                        <Card.Header className="bg-dark text-white">
                          <h6 className="mb-0">
                            <i className="fas fa-database me-2"></i>
                            Generated SQL Query
                          </h6>
                        </Card.Header>
                        <Card.Body className="p-0">
                          <SyntaxHighlighter
                            language="sql"
                            style={tomorrow}
                            className="mb-0"
                            showLineNumbers
                          >
                            {result.generatedSQL}
                          </SyntaxHighlighter>
                        </Card.Body>
                      </Card>

                      {/* Explanation */}
                      <Card className="mb-4">
                        <Card.Header className="bg-info text-white">
                          <h6 className="mb-0">
                            <i className="fas fa-info-circle me-2"></i>
                            NLP Explanation
                          </h6>
                        </Card.Header>
                        <Card.Body>
                          <p className="mb-0">{result.explanation}</p>
                        </Card.Body>
                      </Card>

                      {/* Sample Results */}
                      <Card>
                        <Card.Header className="bg-success text-white">
                          <h6 className="mb-0">
                            <i className="fas fa-table me-2"></i>
                            Sample Results
                          </h6>
                        </Card.Header>
                        <Card.Body>
                          <div className="table-responsive">
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Amount</th>
                                  <th>Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {result.sampleResults.map((row, index) => (
                                  <tr key={index}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>${row.amount}</td>
                                    <td>{row.created_at}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Highlight */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold gradient-text mb-3">
                NLP-Powered Features in Action
              </h2>
              <p className="lead text-muted">
                See how our Natural Language Processing capabilities work behind the scenes.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-brain fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Intent Recognition</h5>
                <p className="text-muted">
                  Our NLP models automatically identify whether you want to SELECT, JOIN, 
                  FILTER, or AGGREGATE data from your queries.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="text-center">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-search fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Entity Extraction</h5>
                <p className="text-muted">
                  Advanced NLP extracts entities like table names, column references, 
                  dates, and numbers from natural language.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="text-center">
                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-language fs-3"></i>
                </div>
                <h5 className="fw-bold mb-3">Context Understanding</h5>
                <p className="text-muted">
                  NLP models understand context and relationships between concepts 
                  to generate accurate, optimized SQL queries.
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
            Ready to Integrate NLP into Your Projects?
          </h2>
          <p className="lead mb-4">
            Get started with NL2SQL and bring the power of Natural Language Processing 
            to your database queries.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Demo;
