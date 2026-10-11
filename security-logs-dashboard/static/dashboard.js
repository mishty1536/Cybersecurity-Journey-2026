let allAlerts = [];


async function loadDashboard() {

    const alertsResponse = await fetch("/api/alerts");
    allAlerts = await alertsResponse.json();

    const statsResponse = await fetch("/api/stats");
    const stats = await statsResponse.json();

    const severityResponse = await fetch("/api/severity-stats");
    const severityStats = await severityResponse.json();


    // Statistics

    document.getElementById("total-logs").textContent =
        stats.total_logs;

    document.getElementById("failed-logins").textContent =
        stats.failed_logins;

    document.getElementById("successful-logins").textContent =
        stats.successful_logins;

    document.getElementById("unique-ips").textContent =
        stats.unique_ips;


    displayAlerts(allAlerts);


    // Charts

    let bruteForce = 0;
    let suspiciousLogin = 0;
    let suspiciousFileAccess = 0;

    allAlerts.forEach(alert => {

        if (alert.alert_type === "Brute Force") {
            bruteForce++;
        }

        if (alert.alert_type === "Suspicious Login") {
            suspiciousLogin++;
        }

        if (alert.alert_type === "Suspicious File Access") {
            suspiciousFileAccess++;
        }

    });


    new Chart(document.getElementById("loginChart"), {

        type: "bar",

        data: {
            labels: [
                "Failed Logins",
                "Successful Logins"
            ],

            datasets: [{
                label: "Login Activity",
                data: [
                    stats.failed_logins,
                    stats.successful_logins
                ]
            }]
        }

    });


    new Chart(document.getElementById("alertChart"), {

        type: "doughnut",

        data: {
            labels: [
                "Brute Force",
                "Suspicious Login",
                "Suspicious File Access"
            ],

            datasets: [{
                data: [
                    bruteForce,
                    suspiciousLogin,
                    suspiciousFileAccess
                ]
            }]
        }

    });

    new Chart(document.getElementById("severityChart"), {
    type: "bar",
    data: {
        labels: ["HIGH", "MEDIUM", "LOW"],
        datasets: [{
            label: "Alerts by Severity",
            data: [
                severityStats.HIGH,
                severityStats.MEDIUM,
                severityStats.LOW
            ]
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
    });
}


// Display alerts in table

function displayAlerts(alerts) {

    const table = document.getElementById("alerts-table");

    table.innerHTML = "";


    if (alerts.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="5">
                    No matching alerts found.
                </td>
            </tr>
        `;

        return;
    }


    alerts.forEach(alert => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${alert.alert_id}</td>
            <td>${alert.alert_type}</td>
            <td>${alert.source_ip}</td>
            <td>${alert.username || "-"}</td>
            <td>${alert.severity}</td>
        `;

        table.appendChild(row);
    });
}


// Apply filters

function filterAlerts() {

    const search = document
        .getElementById("search-input")
        .value
        .trim()
        .toLowerCase();

    const severity = document
        .getElementById("severity-filter")
        .value;

    const type = document
        .getElementById("type-filter")
        .value;

    const filteredAlerts = allAlerts.filter(alert => {

        const ip = String(alert.source_ip || "").toLowerCase();
        const username = String(alert.username || "").toLowerCase();

        const matchesSearch =
            ip.includes(search) ||
            username.includes(search);

        const matchesSeverity =
            severity === "all" ||
            alert.severity === severity;

        const matchesType =
            type === "all" ||
            alert.alert_type === type;

        return (
            matchesSearch &&
            matchesSeverity &&
            matchesType
        );
    });

    displayAlerts(filteredAlerts);
}


// Event listeners

document.getElementById("search-input")
    .addEventListener("input", filterAlerts);

document.getElementById("severity-filter")
    .addEventListener("change", filterAlerts);

document.getElementById("type-filter")
    .addEventListener("change", filterAlerts);


loadDashboard();