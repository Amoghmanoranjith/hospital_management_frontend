import React from "react";
import Appointments from "./Appointments";
import Prescriptions from "./Prescriptions";

const PatientDashboard = ({ patientName, healthStatus }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Critical":
        return { color: "red", fontWeight: "bold" };
      case "Mild":
        return { color: "orange", fontWeight: "bold" };
      case "Stable":
        return { color: "green", fontWeight: "bold" };
      case "Recovering":
        return { color: "blue", fontWeight: "bold" };
      default:
        return { color: "#666" };
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.name}>{patientName}</h1>
        <p style={{ ...styles.status, ...getStatusStyle(healthStatus) }}>
          {healthStatus}
        </p>
      </div>
      <div style={styles.content}>
        <div style={styles.list}>
          <h2 style={styles.heading}>Appointments</h2>
          <Appointments />
        </div>
        <div style={styles.list}>
          <h2 style={styles.heading}>Prescriptions</h2>
          <Prescriptions />
        </div>
      </div>
    </div>
  );
};

PatientDashboard.defaultProps = {
  patientName: "Kakashi",
  healthStatus: "Stable", // Default health status
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  header: {
    marginBottom: "30px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333",
  },
  status: {
    fontSize: "16px",
    marginTop: "5px",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    flex: 1,
    margin: "0 10px",
    padding: "20px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    backgroundColor: "#f8f9fc",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
};

export default PatientDashboard;
