import pandas as pd


def detect_brute_force(logs, threshold=5):
    failed_logins = logs[
        (logs["event_type"] == "login") &
        (logs["status"] == "failed")
    ]

    failed_counts = failed_logins.groupby("source_ip").size()

    alerts = []

    for ip, count in failed_counts.items():
        if count >= threshold:
            alerts.append({
                "alert_type": "Brute Force",
                "source_ip": ip,
                "failed_attempts": int(count),
                "severity": "HIGH"
            })

    return pd.DataFrame(alerts)


def detect_suspicious_login(logs, failed_threshold=3):
    alerts = []

    for ip, ip_logs in logs.groupby("source_ip"):
        ip_logs = ip_logs.sort_values("timestamp")
        failed_count = 0

        for _, row in ip_logs.iterrows():

            if (
                row["event_type"] == "login"
                and row["status"] == "failed"
            ):
                failed_count += 1

            elif (
                row["event_type"] == "login"
                and row["status"] == "success"
            ):
                if failed_count >= failed_threshold:
                    alerts.append({
                        "alert_type": "Suspicious Login",
                        "source_ip": ip,
                        "username": row["username"],
                        "failed_attempts_before_success": failed_count,
                        "severity": "HIGH"
                    })

                failed_count = 0

    return pd.DataFrame(alerts)


def detect_brute_force_window(logs, threshold=5, window_minutes=5):
    alerts = []

    failed_logins = logs[
        (logs["event_type"] == "login") &
        (logs["status"] == "failed")
    ].copy()

    failed_logins = failed_logins.sort_values("timestamp")

    for ip, ip_logs in failed_logins.groupby("source_ip"):

        timestamps = ip_logs["timestamp"].tolist()

        for i in range(len(timestamps)):

            window_start = timestamps[i]
            window_end = (
                window_start +
                pd.Timedelta(minutes=window_minutes)
            )

            count = sum(
                1
                for timestamp in timestamps
                if window_start <= timestamp <= window_end
            )

            if count >= threshold:

                alerts.append({
                    "alert_type": "Brute Force",
                    "source_ip": ip,
                    "failed_attempts": count,
                    "severity": "HIGH",
                    "detection_window": f"{window_minutes} minutes"
                })

                break

    return pd.DataFrame(alerts)


# NEW DETECTION RULE
def detect_suspicious_file_access(logs, threshold=2):

    file_access = logs[
        (logs["event_type"].astype(str).str.strip().str.lower() == "file_access") &
        (logs["status"].astype(str).str.strip().str.lower() == "failed")
    ].copy()

    failed_counts = file_access.groupby("source_ip").size()

    alerts = []

    for ip, count in failed_counts.items():

        if count >= threshold:

            username = file_access[
                file_access["source_ip"] == ip
            ]["username"].iloc[0]

            alerts.append({
                "alert_type": "Suspicious File Access",
                "source_ip": ip,
                "username": username,
                "failed_attempts": int(count),
                "severity": "MEDIUM"
            })

    return pd.DataFrame(alerts)


# COMBINE ALL DETECTION RULES
def generate_alerts(logs):

    brute_force_alerts = detect_brute_force_window(
        logs,
        threshold=5,
        window_minutes=5
    )

    suspicious_login_alerts = detect_suspicious_login(logs)

    file_access_alerts = detect_suspicious_file_access(
        logs,
        threshold=2
    )

    alerts = []

    if not brute_force_alerts.empty:
        alerts.extend(
            brute_force_alerts.to_dict("records")
        )

    if not suspicious_login_alerts.empty:
        alerts.extend(
            suspicious_login_alerts.to_dict("records")
        )

    if not file_access_alerts.empty:
        alerts.extend(
            file_access_alerts.to_dict("records")
        )

    for index, alert in enumerate(alerts, start=1):
        alert["alert_id"] = f"ALERT-{index:03d}"

    alerts_df = pd.DataFrame(alerts)

    if not alerts_df.empty:
        alerts_df = alerts_df.fillna("")

    return alerts_df