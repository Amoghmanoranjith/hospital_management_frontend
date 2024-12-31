import React, { useState, useEffect } from "react";
import PatientCard from "./PatientCard";

const DoctorDashboard = ({ doctorName, doctorEmail }) => {
  const [patientList, setPatientList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patient data from API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/doctor/");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setPatientList(data.patients); // Assuming API returns { patients: [] }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);
  const handleDeletePatient = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/doctor/deletepatient/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete patient: ${response.statusText}`);
      }

      // If the API call succeeds, update the local state
      const updatedList = patientList.filter((patient) => patient.id !== id);
      setPatientList(updatedList);

      console.log(`Patient with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting patient:", error.message);
      alert("Failed to delete the patient. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.name}>{doctorName}</h1>
        <p style={styles.email}>{doctorEmail}</p>
      </div>
      <div style={styles.patientList}>
        {patientList.length > 0 ? (
          patientList.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onDelete={handleDeletePatient}
            />
          ))
        ) : (
          <p>No patients found.</p>
        )}
      </div>
    </div>
  );
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
  email: {
    fontSize: "16px",
    color: "#666",
  },
  patientList: {
    marginTop: "20px",
  },
};

export default DoctorDashboard;
