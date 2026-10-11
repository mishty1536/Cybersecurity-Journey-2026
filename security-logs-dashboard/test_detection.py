from log_parser import load_logs
from detection.rules import detect_suspicious_file_access

logs = load_logs()

print("\nFILE ACCESS ALERTS")
print("=" * 50)

alerts = detect_suspicious_file_access(logs)

print(alerts.to_string(index=False)) 