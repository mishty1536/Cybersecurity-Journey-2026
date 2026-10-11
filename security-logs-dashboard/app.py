from flask import Flask, jsonify, render_template
from log_parser import load_logs
from detection.rules import generate_alerts

app = Flask(__name__)


@app.route("/")
def dashboard():
    return render_template("dashboard.html")


@app.route("/api/alerts")
def get_alerts():
    logs = load_logs()
    alerts = generate_alerts(logs)

    return jsonify(alerts.to_dict(orient="records"))


@app.route("/api/stats")
def get_stats():
    logs = load_logs()

    return jsonify({
        "total_logs": len(logs),
        "failed_logins": int(
            len(logs[
                (logs["event_type"] == "login") &
                (logs["status"] == "failed")
            ])
        ),
        "successful_logins": int(
            len(logs[
                (logs["event_type"] == "login") &
                (logs["status"] == "success")
            ])
        ),
        "unique_ips": int(logs["source_ip"].nunique())
    })

@app.route("/api/severity-stats")
def get_severity_stats():
    logs = load_logs()
    alerts = generate_alerts(logs)

    severity_counts = alerts["severity"].value_counts().to_dict()

    return jsonify({
        "HIGH": int(severity_counts.get("HIGH", 0)),
        "MEDIUM": int(severity_counts.get("MEDIUM", 0)),
        "LOW": int(severity_counts.get("LOW", 0))
    })

if __name__ == "__main__":
    app.run(debug=True)