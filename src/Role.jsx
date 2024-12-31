import React from "react";

const RoleSelector = ({ onSelectRole }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Select Your Role</h1>
        <button style={styles.button} onClick={() => onSelectRole("doctor")}>
          Doctor
        </button>
        <button style={styles.button} onClick={() => onSelectRole("nurse")}>
          Nurse
        </button>
        <button style={styles.button} onClick={() => onSelectRole("patient")}>
          Patient
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fc",
  },
  card: {
    width: "360px",
    padding: "40px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px 0",
    textTransform: "uppercase",
  },
};

export default RoleSelector;
