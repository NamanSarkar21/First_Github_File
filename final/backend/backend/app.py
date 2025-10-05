from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_utils import summarize_news, forecast_portfolio
from monte_carlo import monte_carlo_simulation
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Mock in-memory users (replace with DB in production)
users = {}

# ---------------- Auth ----------------
@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    if username in users:
        return jsonify({"error": "User exists"}), 400
    users[username] = password
    return jsonify({"message": "Signup successful"})

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    if users.get(username) != password:
        return jsonify({"error": "Invalid credentials"}), 401
    return jsonify({"message": "Login successful"})

# ---------------- Portfolio Forecast ----------------
@app.route("/forecast", methods=["POST"])
def forecast():
    data = request.json
    portfolio = data.get("portfolio")  # {"AAPL": 50, "TSLA": 30}
    forecast_data = forecast_portfolio(portfolio)
    return jsonify(forecast_data)

# ---------------- Risk Analysis ----------------
@app.route("/risk", methods=["POST"])
def risk():
    data = request.json
    portfolio = data.get("portfolio")
    risk_data = monte_carlo_simulation(portfolio)
    return jsonify(risk_data)

# ---------------- News Summarization ----------------
@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.json
    news = data.get("news")  # List of news strings
    summaries = [summarize_news(article) for article in news]
    return jsonify({"summaries": summaries})

if __name__ == "__main__":
    app.run(debug=True)
