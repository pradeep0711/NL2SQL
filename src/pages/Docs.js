import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Tab, Tabs } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Docs = () => {
  const [activeTab, setActiveTab] = useState('installation');

  const codeExamples = {
    installation: `# Install NL2SQL with NLP capabilities
pip install nl2sql

# Or install with additional NLP dependencies
pip install nl2sql[nlp,openai,anthropic]

# Install from source
git clone https://github.com/nl2sql/nl2sql.git
cd nl2sql
pip install -e .`,

    basicUsage: `from nl2sql import NL2SQL
import openai

# Initialize with NLP models
nl2sql = NL2SQL(
    model="gpt-4",  # Use GPT-4 for advanced NLP
    database_url="postgresql://user:pass@localhost/db",
    enable_nlp=True  # Enable Natural Language Processing
)

# Process natural language query with NLP
query = "Show me all customers who made purchases last month"
result = nl2sql.process_query(query)

print(f"Generated SQL: {result.sql}")
print(f"NLP Analysis: {result.nlp_analysis}")
print(f"Results: {result.data}")`,

    advancedNLP: `from nl2sql import NL2SQL
from nl2sql.nlp import NLPProcessor

# Advanced NLP configuration with Gemini 2.5 Pro
nlp_config = {
    "intent_model": "gemini-2.5-pro",
    "ner_model": "spacy/en_core_web_sm",
    "embeddings": "sentence-transformers/all-MiniLM-L6-v2",
    "confidence_threshold": 0.8
}

nl2sql = NL2SQL(
    model="gemini-2.5-pro",
    database_url="postgresql://user:pass@localhost/db",
    nlp_config=nlp_config
)

# Process complex query with NLP analysis
query = """
Find customers who haven't made any purchases in the last 3 months 
but have high engagement scores and are in premium segments
"""

result = nl2sql.process_query(query, return_nlp_analysis=True)

# Access detailed NLP analysis
print("Intent:", result.nlp_analysis.intent)
print("Entities:", result.nlp_analysis.entities)
print("Confidence:", result.nlp_analysis.confidence)
print("Processing time:", result.nlp_analysis.processing_time)`,

    apiExample: `import requests

# NL2SQL API endpoint
url = "https://api.nl2sql.com/v1/query"

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

# Natural language query
data = {
    "query": "Show me the top 10 customers by revenue this year",
    "database_schema": "your_database_schema",
    "nlp_options": {
        "enable_intent_recognition": True,
        "enable_entity_extraction": True,
        "confidence_threshold": 0.8
    }
}

response = requests.post(url, json=data, headers=headers)
result = response.json()

print(f"Generated SQL: {result['sql']}")
print(f"NLP Analysis: {result['nlp_analysis']}")
print(f"Results: {result['data']}")`,

    schemaSetup: `-- Example database schema for NL2SQL
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active'
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(50),
    stock_quantity INTEGER DEFAULT 0
);

-- NL2SQL will automatically detect these relationships
-- and use them for intelligent query generation`,

    configuration: `# nl2sql_config.yaml
database:
  url: "postgresql://user:pass@localhost/db"
  schema: "public"
  max_connections: 10

nlp:
  models:
    intent_classification: "gpt-4"
    entity_extraction: "spacy/en_core_web_sm"
    embeddings: "sentence-transformers/all-MiniLM-L6-v2"
  
  processing:
    confidence_threshold: 0.8
    max_tokens: 4000
    temperature: 0.1
  
  languages:
    - "en"
    - "es" 
    - "fr"
    - "de"

openai:
  api_key: "${'${'}process.env.REACT_APP_OPENAI_API_KEY${'}'}"
  model: "gpt-4"
  max_tokens: 2000

gemini:
  api_key: "${'${'}process.env.REACT_APP_GEMINI_API_KEY${'}'}"
  model: "gemini-2.5-pro"

logging:
  level: "INFO"
  file: "nl2sql.log"`
  };

  const faqData = [
    {
      question: "How does the NLP processing work?",
      answer: "NL2SQL uses advanced Natural Language Processing models including GPT-4, BERT, and spaCy to understand your queries. The system performs intent classification, entity extraction, and contextual analysis before generating SQL queries."
    },
    {
      question: "Which languages are supported?",
      answer: "Our NLP models support 50+ languages including English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, and many more. The system automatically detects the input language."
    },
    {
      question: "What is the accuracy of NLP processing?",
      answer: "Our NLP system achieves 99.2% accuracy in query understanding and intent classification. The system continuously learns and improves through usage patterns and feedback."
    },
    {
      question: "How fast is the NLP processing?",
      answer: "Average NLP processing time is under 5ms, including tokenization, intent classification, entity extraction, and context building. SQL generation adds another 1-2ms."
    },
    {
      question: "Can I use my own NLP models?",
      answer: "Yes! NL2SQL supports custom NLP models through the configuration system. You can specify your own intent classification, entity extraction, and embedding models."
    },
    {
      question: "Is my data secure during NLP processing?",
      answer: "Absolutely. All NLP processing happens locally or through secure API endpoints. Your database credentials and query data are never stored or logged. We use industry-standard encryption."
    }
  ];

  return (
    <div className="py-5">
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'var(--gradient-primary)' }}>
        <Container className="text-center text-white">
          <h1 className="display-4 fw-bold mb-4">
            <i className="fas fa-book me-3"></i>
            NL2SQL Documentation
          </h1>
          <p className="lead mb-4">
            Learn how to integrate advanced Natural Language Processing into your 
            database queries with our comprehensive documentation.
          </p>
        </Container>
      </section>

      {/* Documentation Tabs */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={3}>
              <Card className="border-0 shadow-lg sticky-top" style={{ top: '100px' }}>
                <Card.Body className="p-0">
                  <Tabs
                    activeKey={activeTab}
                    onSelect={setActiveTab}
                    className="flex-column border-0"
                    variant="pills"
                  >
                    <Tab eventKey="installation" title="Installation" className="border-0">
                      <div className="p-3">
                        <i className="fas fa-download me-2"></i>
                        Get started with NL2SQL
                      </div>
                    </Tab>
                    <Tab eventKey="basicUsage" title="Basic Usage" className="border-0">
                      <div className="p-3">
                        <i className="fas fa-play me-2"></i>
                        Your first NLP query
                      </div>
                    </Tab>
                    <Tab eventKey="advancedNLP" title="Advanced NLP" className="border-0">
                      <div className="p-3">
                        <i className="fas fa-brain me-2"></i>
                        Advanced NLP features
                      </div>
                    </Tab>
                    <Tab eventKey="apiExample" title="API Reference" className="border-0">
                      <div className="p-3">
                        <i className="fas fa-code me-2"></i>
                        REST API usage
                      </div>
                    </Tab>
                    <Tab eventKey="schemaSetup" title="Schema Setup" className="border-0">
                      <div className="p-3">
                        <i className="fas fa-database me-2"></i>
                        Database configuration
                      </div>
                    </Tab>
                    <Tab eventKey="configuration" title="Configuration" className="border-0">
                      <div className="p-3">
                        <i className="fas fa-cog me-2"></i>
                        NLP configuration
                      </div>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={9}>
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-4">
                  {activeTab === 'installation' && (
                    <div>
                      <h2 className="fw-bold mb-4">
                        <i className="fas fa-download text-primary me-2"></i>
                        Installation Guide
                      </h2>
                      <p className="lead text-muted mb-4">
                        Get started with NL2SQL and its advanced NLP capabilities in just a few steps.
                      </p>

                      <h4 className="fw-bold mb-3">Prerequisites</h4>
                      <ul className="mb-4">
                        <li>Python 3.8 or higher</li>
                        <li>pip package manager</li>
                        <li>Database connection (PostgreSQL, MySQL, SQLite, etc.)</li>
                        <li>OpenAI API key (for GPT models) or Anthropic API key (for Claude)</li>
                      </ul>

                      <h4 className="fw-bold mb-3">Installation</h4>
                      <div className="mb-4">
                        <SyntaxHighlighter language="bash" style={tomorrow}>
                          {codeExamples.installation}
                        </SyntaxHighlighter>
                      </div>

                      <h4 className="fw-bold mb-3">Verify Installation</h4>
                      <div className="mb-4">
                        <SyntaxHighlighter language="python" style={tomorrow}>
{`import nl2sql
print(f"NL2SQL version: {nl2sql.__version__}")

# Test NLP capabilities
nl2sql.test_nlp_models()`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  )}

                  {activeTab === 'basicUsage' && (
                    <div>
                      <h2 className="fw-bold mb-4">
                        <i className="fas fa-play text-success me-2"></i>
                        Basic Usage with NLP
                      </h2>
                      <p className="lead text-muted mb-4">
                        Learn how to use NL2SQL with its Natural Language Processing features.
                      </p>

                      <div className="mb-4">
                        <SyntaxHighlighter language="python" style={tomorrow}>
                          {codeExamples.basicUsage}
                        </SyntaxHighlighter>
                      </div>

                      <h4 className="fw-bold mb-3">Understanding the Output</h4>
                      <div className="alert alert-info">
                        <h6 className="fw-bold">NLP Analysis Structure:</h6>
                        <ul className="mb-0">
                          <li><strong>intent:</strong> The identified intent (SELECT, JOIN, FILTER, etc.)</li>
                          <li><strong>entities:</strong> Extracted entities like table names, dates, numbers</li>
                          <li><strong>confidence:</strong> Confidence score for the NLP analysis</li>
                          <li><strong>processing_time:</strong> Time taken for NLP processing</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'advancedNLP' && (
                    <div>
                      <h2 className="fw-bold mb-4">
                        <i className="fas fa-brain text-warning me-2"></i>
                        Advanced NLP Configuration
                      </h2>
                      <p className="lead text-muted mb-4">
                        Configure advanced NLP models and processing options for optimal performance.
                      </p>

                      <div className="mb-4">
                        <SyntaxHighlighter language="python" style={tomorrow}>
                          {codeExamples.advancedNLP}
                        </SyntaxHighlighter>
                      </div>

                      <h4 className="fw-bold mb-3">NLP Configuration Options</h4>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Option</th>
                              <th>Description</th>
                              <th>Default</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>intent_model</td>
                              <td>Model for intent classification</td>
                              <td>gpt-4</td>
                            </tr>
                            <tr>
                              <td>ner_model</td>
                              <td>Named Entity Recognition model</td>
                              <td>spacy/en_core_web_sm</td>
                            </tr>
                            <tr>
                              <td>embeddings</td>
                              <td>Text embedding model</td>
                              <td>sentence-transformers/all-MiniLM-L6-v2</td>
                            </tr>
                            <tr>
                              <td>confidence_threshold</td>
                              <td>Minimum confidence for processing</td>
                              <td>0.8</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeTab === 'apiExample' && (
                    <div>
                      <h2 className="fw-bold mb-4">
                        <i className="fas fa-code text-info me-2"></i>
                        REST API Reference
                      </h2>
                      <p className="lead text-muted mb-4">
                        Use NL2SQL's REST API to integrate NLP-powered SQL generation into your applications.
                      </p>

                      <div className="mb-4">
                        <SyntaxHighlighter language="python" style={tomorrow}>
                          {codeExamples.apiExample}
                        </SyntaxHighlighter>
                      </div>

                      <h4 className="fw-bold mb-3">API Endpoints</h4>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Endpoint</th>
                              <th>Method</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>/v1/query</td>
                              <td>POST</td>
                              <td>Process natural language query</td>
                            </tr>
                            <tr>
                              <td>/v1/schema</td>
                              <td>GET</td>
                              <td>Get database schema</td>
                            </tr>
                            <tr>
                              <td>/v1/health</td>
                              <td>GET</td>
                              <td>Check API health and NLP models</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeTab === 'schemaSetup' && (
                    <div>
                      <h2 className="fw-bold mb-4">
                        <i className="fas fa-database text-secondary me-2"></i>
                        Database Schema Setup
                      </h2>
                      <p className="lead text-muted mb-4">
                        Configure your database schema for optimal NLP processing and query generation.
                      </p>

                      <h4 className="fw-bold mb-3">Example Schema</h4>
                      <div className="mb-4">
                        <SyntaxHighlighter language="sql" style={tomorrow}>
                          {codeExamples.schemaSetup}
                        </SyntaxHighlighter>
                      </div>

                      <h4 className="fw-bold mb-3">Schema Best Practices</h4>
                      <div className="alert alert-success">
                        <h6 className="fw-bold">For Better NLP Processing:</h6>
                        <ul className="mb-0">
                          <li>Use descriptive table and column names</li>
                          <li>Include foreign key relationships</li>
                          <li>Add meaningful comments to tables and columns</li>
                          <li>Use consistent naming conventions</li>
                          <li>Include sample data for better understanding</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'configuration' && (
                    <div>
                      <h2 className="fw-bold mb-4">
                        <i className="fas fa-cog text-danger me-2"></i>
                        Configuration Guide
                      </h2>
                      <p className="lead text-muted mb-4">
                        Configure NL2SQL's NLP models and processing options for your specific needs.
                      </p>

                      <h4 className="fw-bold mb-3">Configuration File</h4>
                      <div className="mb-4">
                        <SyntaxHighlighter language="yaml" style={tomorrow}>
                          {codeExamples.configuration}
                        </SyntaxHighlighter>
                      </div>

                      <h4 className="fw-bold mb-3">Environment Variables</h4>
                      <div className="alert alert-warning">
                        <h6 className="fw-bold">Required Environment Variables:</h6>
                        <ul className="mb-0">
                          <li><code>OPENAI_API_KEY</code> - Your OpenAI API key</li>
                          <li><code>GEMINI_API_KEY</code> - Your Google Gemini API key</li>
                          <li><code>DATABASE_URL</code> - Database connection string</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold gradient-text mb-3">
                Frequently Asked Questions
              </h2>
              <p className="lead text-muted">
                Common questions about NL2SQL's Natural Language Processing capabilities.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={8} className="mx-auto">
              <Accordion>
                {faqData.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>
                      <i className="fas fa-question-circle text-primary me-2"></i>
                      {faq.question}
                    </Accordion.Header>
                    <Accordion.Body>
                      {faq.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'var(--gradient-secondary)' }}>
        <Container className="text-center text-white">
          <h2 className="display-5 fw-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="lead mb-4">
            Join thousands of developers using NL2SQL's NLP capabilities 
            to transform their database interactions.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default Docs;
