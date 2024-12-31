import React, { useState } from "react";
import { FaTrashAlt, FaCalendarAlt, FaMedkit } from "react-icons/fa";

const PatientCard = ({ patient, onDelete }) => {
  const [prescription, setPrescription] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleDelete = async () => {
    try {
      const resp = await fetch(`.../{patient.id}`, { method: "DELETE" });
      if (resp.ok) {
        alert(`Patient ${patient.name} has been deleted successfully.`);
      } else {
        alert("Failed to delete patient. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting patient:", error);
      alert("An error occurred while deleting the patient.");
    }
    onDelete(patient.id);
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const resp = await fetch(`../{patient.id}`, {
        method: "POST", // assuming POST for appointment submission
        body: JSON.stringify({ appointmentDate }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        alert(`Patient ${patient.name} appointment scheduled successfully.`);
      } else {
        alert("Failed to schedule appointment.");
      }
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      alert("An error occurred while scheduling the appointment.");
    }
  };

  const handlePrescriptionSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const resp = await fetch(`../{patient.id}`, {
        method: "POST", // assuming POST for prescription submission
        body: JSON.stringify({ prescription }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        alert(`Prescription for ${patient.name} has been added successfully.`);
      } else {
        alert("Failed to add prescription.");
      }
    } catch (error) {
      console.error("Error adding prescription:", error);
      alert("An error occurred while adding the prescription.");
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{patient.name}</h3>

      {/* Prescription Section */}
      <form onSubmit={handlePrescriptionSubmit} style={styles.fieldGroup}>
        <FaMedkit style={styles.icon} /> {/* Use FaMedkit icon here */}
        <input
          type="text"
          placeholder="Add Prescription"
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>
          Submit Prescription
        </button>
      </form>

      {/* Appointment Section */}
      <form onSubmit={handleAppointmentSubmit} style={styles.fieldGroup}>
        <FaCalendarAlt style={styles.icon} />
        <input
          type="text"
          placeholder="Add Appointment (mm/dd/yyyy)"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>
          Submit Appointment
        </button>
      </form>

      {/* Delete Button */}
      <button onClick={handleDelete} style={styles.deleteButton}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    marginBottom: "15px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#f8f9fc",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    flex: 2,
  },
  fieldGroup: {
    flex: 3,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginRight: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  icon: {
    fontSize: "20px",
    color: "#333",
  },
  submitButton: {
    padding: "8px 12px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    flex: 0.5,
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#e74c3c",
    color: "#fff",
    cursor: "pointer",
  },
};

export default PatientCard;
