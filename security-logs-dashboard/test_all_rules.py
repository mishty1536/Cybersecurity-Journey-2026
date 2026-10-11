from log_parser import load_logs
from detection.rules import (
    detect_brute_force_window,
    detect_suspicious_login,
    detect_suspicious_file_access
)

logs = load_logs()

tests = {
    "Brute Force": detect_brute_force_window(logs),
    "Suspicious Login": detect_suspicious_login(logs),
    "Suspicious File Access": detect_suspicious_file_access(logs)
}

print("\nSECURITY DETECTION TEST REPORT")
print("=" * 45)

for name, alerts in tests.items():
    status = "PASS" if not alerts.empty else "NO ALERT"
    print(f"{name}: {status}")

    if not alerts.empty:
        print(alerts.to_string(index=False))
    print("-" * 45)

print("\nFINAL TEST SUMMARY")
print("=" * 45)

total_tests = len(tests)
passed_tests = sum(
    1 for alerts in tests.values()
    if not alerts.empty
)

print(f"Total detection rules tested: {total_tests}")
print(f"Rules generating alerts: {passed_tests}")
print(f"Rules without alerts: {total_tests - passed_tests}")

if passed_tests == total_tests:
    print("RESULT: ALL DETECTION RULES PASSED")
else:
    print("RESULT: CHECK RULES WITH NO ALERTS")