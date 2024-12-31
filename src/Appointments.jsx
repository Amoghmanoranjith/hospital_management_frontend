import React from "react";

const Appointments = () => {
  const appointments = [
    "Appointment with Dr. Smith - Jan 12, 2024",
    "Appointment with Dr. John - Feb 15, 2024",
  ];

  return (
    <ul style={styles.list}>
      {appointments.map((appointment, index) => (
        <li key={index} style={styles.listItem}>
          {appointment}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
};

export default Appointments;
