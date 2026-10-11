import pandas as pd


def load_logs():
    logs = pd.read_csv("data/security-log.csv")

    logs["timestamp"] = pd.to_datetime(logs["timestamp"])

    return logs


if __name__ == "__main__":
    logs = load_logs()

    print("Security logs loaded successfully!")
    print("Total events:", len(logs))

    print("\nColumns:")
    print(logs.columns.tolist())

    print("\nFirst 5 events:")
    print(logs.head())

    print("\nEvent types:")
    print(logs["event_type"].value_counts())

    print("\nLogin status:")
    print(logs["status"].value_counts())

    print("\nSource IPs:")
    print(logs["source_ip"].value_counts())