from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import random
import time
import re
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Resolve React build directory
BUILD_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'build'))

# Create Flask app and configure static serving from React build
app = Flask(__name__, static_folder=BUILD_DIR, static_url_path='/')

# Configure CORS from environment
cors_allowed = os.getenv('CORS_ALLOWED_ORIGINS', '*')
if cors_allowed == '*':
	CORS(app)
else:
	origins = [o.strip() for o in cors_allowed.split(',') if o.strip()]
	CORS(app, resources={r"/api/*": {"origins": origins}})

# Mock NLP processing functions
def extract_intent(query):
	"""Mock intent classification"""
	query_lower = query.lower()
	if any(word in query_lower for word in ['show', 'find', 'get', 'list', 'display']):
		return "DATA_RETRIEVAL"
	elif any(word in query_lower for word in ['count', 'calculate', 'sum', 'average']):
		return "AGGREGATION"
	elif any(word in query_lower for word in ['join', 'combine', 'merge']):
		return "JOIN"
	elif any(word in query_lower for word in ['filter', 'where', 'having']):
		return "FILTER"
	else:
		return "GENERAL_QUERY"

def extract_entities(query):
	"""Mock entity extraction"""
	entities = []
	
	# Common entity patterns
	entity_patterns = {
		'customers': r'\b(customers?|users?|clients?)\b',
		'orders': r'\b(orders?|purchases?|transactions?)\b',
		'products': r'\b(products?|items?|goods?)\b',
		'revenue': r'\b(revenue|sales|income|profit)\b',
		'last_month': r'\b(last month|previous month|past month)\b',
		'this_quarter': r'\b(this quarter|current quarter)\b',
		'top_10': r'\b(top 10|top ten|highest 10)\b',
		'premium': r'\b(premium|vip|gold|silver)\b',
		'pending': r'\b(pending|waiting|in progress)\b'
	}
	
	for entity_type, pattern in entity_patterns.items():
		if re.search(pattern, query, re.IGNORECASE):
			entities.append(entity_type)
	
	return entities

def generate_sql(query, intent, entities):
	"""Mock SQL generation based on NLP analysis"""
	
	# Base queries for different intents
	base_queries = {
		"DATA_RETRIEVAL": {
			"customers": "SELECT c.id, c.name, c.email, c.created_at FROM customers c",
			"orders": "SELECT o.id, o.customer_id, o.amount, o.created_at FROM orders o",
			"products": "SELECT p.id, p.name, p.price, p.category FROM products p"
		},
		"AGGREGATION": {
			"revenue": "SELECT SUM(o.amount) as total_revenue FROM orders o",
			"count": "SELECT COUNT(*) as total_count FROM {table}",
			"average": "SELECT AVG(o.amount) as average_amount FROM orders o"
		}
	}
	
	# Generate SQL based on intent and entities
	sql_parts = []
	
	if intent == "DATA_RETRIEVAL":
		if "customers" in entities and "orders" in entities:
			sql_parts.append("SELECT c.id, c.name, c.email, o.amount, o.created_at")
			sql_parts.append("FROM customers c")
			sql_parts.append("JOIN orders o ON c.id = o.customer_id")
		elif "customers" in entities:
			sql_parts.append("SELECT c.id, c.name, c.email, c.created_at")
			sql_parts.append("FROM customers c")
		elif "products" in entities:
			sql_parts.append("SELECT p.id, p.name, p.price, p.category")
			sql_parts.append("FROM products p")
		
		# Add WHERE clauses based on entities
		where_clauses = []
		if "last_month" in entities:
			where_clauses.append("o.created_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)")
		if "this_quarter" in entities:
			where_clauses.append("o.created_at >= DATE_SUB(NOW(), INTERVAL 3 MONTH)")
		if "premium" in entities:
			where_clauses.append("c.status = 'premium'")
		if "pending" in entities:
			where_clauses.append("o.status = 'pending'")
		
		if where_clauses:
			sql_parts.append("WHERE " + " AND ".join(where_clauses))
		
		# Add ORDER BY
		if "top_10" in entities:
			sql_parts.append("ORDER BY o.amount DESC LIMIT 10")
		else:
			sql_parts.append("ORDER BY o.created_at DESC")
	
	elif intent == "AGGREGATION":
		if "revenue" in entities:
			sql_parts.append("SELECT SUM(o.amount) as total_revenue, COUNT(o.id) as order_count")
			sql_parts.append("FROM orders o")
			if "this_quarter" in entities:
				sql_parts.append("WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 3 MONTH)")
	
	return ";\n".join(sql_parts) + ";"

def generate_sample_results(intent, entities):
	"""Generate mock sample results"""
	if intent == "DATA_RETRIEVAL":
		if "customers" in entities and "orders" in entities:
			return [
				{
					"id": 1,
					"name": "John Doe",
					"email": "john@example.com",
					"amount": 299.99,
					"created_at": (datetime.now() - timedelta(days=15)).strftime("%Y-%m-%d")
				},
				{
					"id": 2,
					"name": "Jane Smith",
					"email": "jane@example.com",
					"amount": 149.50,
					"created_at": (datetime.now() - timedelta(days=20)).strftime("%Y-%m-%d")
				},
				{
					"id": 3,
					"name": "Bob Johnson",
					"email": "bob@example.com",
					"amount": 89.99,
					"created_at": (datetime.now() - timedelta(days=25)).strftime("%Y-%m-%d")
				}
			]
		elif "customers" in entities:
			return [
				{
					"id": 1,
					"name": "John Doe",
					"email": "john@example.com",
					"created_at": "2024-01-15"
				},
				{
					"id": 2,
					"name": "Jane Smith",
					"email": "jane@example.com",
					"created_at": "2024-01-14"
				}
			]
	elif intent == "AGGREGATION":
		if "revenue" in entities:
			return [
				{
					"total_revenue": 15429.75,
					"order_count": 87
				}
			]
	
	return []

@app.route('/api/query', methods=['POST'])
def process_query():
	"""Process natural language query with NLP"""
	try:
		data = request.get_json()
		query = data.get('query', '')
		
		if not query:
			return jsonify({'error': 'Query is required'}), 400
		
		# Simulate NLP processing time
		time.sleep(0.5)
		
		# Mock NLP analysis
		intent = extract_intent(query)
		entities = extract_entities(query)
		confidence = round(random.uniform(0.85, 0.99), 2)
		processing_time = f"{random.uniform(3.5, 5.5):.1f}ms"
		
		# Generate SQL
		sql = generate_sql(query, intent, entities)
		
		# Generate sample results
		sample_results = generate_sample_results(intent, entities)
		
		# Create explanation
		explanation = f"This query processes your natural language input using advanced NLP techniques. The system identified the intent as '{intent}' and extracted entities: {', '.join(entities)}. The generated SQL query retrieves the requested data with proper joins and filtering."
		
		response = {
			'originalQuery': query,
			'nlpAnalysis': {
				'intent': intent,
				'entities': entities,
				'confidence': confidence,
				'processingTime': processing_time
			},
			'generatedSQL': sql,
			'explanation': explanation,
			'sampleResults': sample_results
		}
		
		return jsonify(response)
		
	except Exception as e:
		return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
	"""Health check endpoint"""
	return jsonify({
		'status': 'healthy',
		'nlp_models': 'active',
		'timestamp': datetime.now().isoformat()
	})

@app.route('/api/schema', methods=['GET'])
def get_schema():
	"""Get database schema information"""
	schema = {
		'tables': [
			{
				'name': 'customers',
				'columns': [
					{'name': 'id', 'type': 'INTEGER', 'description': 'Primary key'},
					{'name': 'name', 'type': 'VARCHAR(100)', 'description': 'Customer name'},
					{'name': 'email', 'type': 'VARCHAR(100)', 'description': 'Customer email'},
					{'name': 'created_at', 'type': 'TIMESTAMP', 'description': 'Registration date'},
					{'name': 'status', 'type': 'VARCHAR(20)', 'description': 'Customer status'}
				]
			},
			{
				'name': 'orders',
				'columns': [
					{'name': 'id', 'type': 'INTEGER', 'description': 'Primary key'},
					{'name': 'customer_id', 'type': 'INTEGER', 'description': 'Foreign key to customers'},
					{'name': 'amount', 'type': 'DECIMAL(10,2)', 'description': 'Order amount'},
					{'name': 'status', 'type': 'VARCHAR(20)', 'description': 'Order status'},
					{'name': 'created_at', 'type': 'TIMESTAMP', 'description': 'Order date'}
				]
			},
			{
				'name': 'products',
				'columns': [
					{'name': 'id', 'type': 'INTEGER', 'description': 'Primary key'},
					{'name': 'name', 'type': 'VARCHAR(200)', 'description': 'Product name'},
					{'name': 'price', 'type': 'DECIMAL(10,2)', 'description': 'Product price'},
					{'name': 'category', 'type': 'VARCHAR(50)', 'description': 'Product category'},
					{'name': 'stock_quantity', 'type': 'INTEGER', 'description': 'Available stock'}
				]
			}
		]
	}
	return jsonify(schema)

# Serve React build and SPA fallback
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_client(path):
	if BUILD_DIR and os.path.exists(BUILD_DIR):
		full_path = os.path.join(BUILD_DIR, path)
		if path != '' and os.path.exists(full_path):
			return send_from_directory(BUILD_DIR, path)
		return send_from_directory(BUILD_DIR, 'index.html')
	return jsonify({'error': 'Build directory not found'}), 404

if __name__ == '__main__':
	host = os.getenv('FLASK_RUN_HOST', '127.0.0.1')
	port = int(os.getenv('FLASK_RUN_PORT', '5000'))
	debug = os.getenv('FLASK_DEBUG', '0') in ['1', 'true', 'True']
	app.run(host=host, port=port, debug=debug)
