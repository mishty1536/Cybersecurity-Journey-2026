# Security Log Analysis & Threat Detection Dashboard

## Overview
A Python-based cybersecurity project that analyzes security logs, detects suspicious activities using rule-based detection, and displays security insights through an interactive web dashboard.

## Features
- **Brute Force Detection:** Identifies repeated failed login attempts within a five-minute window.
- **Suspicious Login Detection:** Flags successful logins following repeated failed login attempts.
- **Suspicious File Access Detection:** Identifies repeated failed file-access attempts from the same IP address.
- **Security Statistics:** Displays total log events, failed logins, successful logins, and unique IP addresses.
- **Interactive Dashboard:** Visualizes login activity, alert categories, and alert severity.
- **Alert Filtering:** Search by IP address or username and filter by severity or alert type.
- **REST API:** Provides endpoints for alerts, overall statistics, and severity statistics.

## Tech Stack
- Python
- Flask
- Pandas
- HTML, CSS, JavaScript
- Chart.js
- CSV

## Project Structure
```text
security-log-dashboard/
├── app.py
├── log_parser.py
├── test_all_rules.py
├── test_detection.py
├── requirements.txt
├── data/
│   └── security_logs.csv
├── detection/
│   └── rules.py
├── templates/
│   └── dashboard.html
└── static/
    ├── style.css
    └── dashboard.js
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone YOUR_REPOSITORY_URL
   cd security-log-dashboard
   ```

2. Create and activate a virtual environment on Windows:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the application:
   ```bash
   python app.py
   ```

5. Open the dashboard at:
   `http://127.0.0.1:5000/`

## API Endpoints

| Endpoint | Purpose |
|---|---|
| `/` | Dashboard |
| `/api/alerts` | Generated security alerts |
| `/api/stats` | Overall security statistics |
| `/api/severity-stats` | Alert counts by severity |

## Testing
Run the detection checks using:

```bash
python test_all_rules.py
```

The current sample dataset is designed to demonstrate brute-force attempts, suspicious login sequences, and repeated failed file access. The detection rules are heuristic examples and may produce false positives or miss attacks.

## Future Improvements
- Add more detection rules and configurable thresholds.
- Support larger log datasets and additional log formats.
- Add automated unit tests and edge-case validation.
- Implement user authentication and role-based access.
- Add alert export and investigation history.
- Deploy the application to a cloud platform.

## Disclaimer
This project is intended for educational cybersecurity monitoring and defensive analysis. Detection results depend on the available log data and configured rules.