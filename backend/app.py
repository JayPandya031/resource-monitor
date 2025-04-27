from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources=['*'])

@app.route("/report-usage", methods=['POST'])
def report_usage():
    reported_data = request.json
    print(f"Reported: ", reported_data)
    return jsonify({"message": "success"}), 200

app.run(host="localhost", port=5000)