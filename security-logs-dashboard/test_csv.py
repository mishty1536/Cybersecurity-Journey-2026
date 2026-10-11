import pandas as pd

logs = pd.read_csv("data/security-log.csv")

print(logs)
print("\nTotal logs:", len(logs))   