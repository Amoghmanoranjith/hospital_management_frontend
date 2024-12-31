import React from "react";

const Prescriptions = () => {
  const prescriptions = [
    "Ibuprofen 200mg - 2 times a day",
    "Paracetamol 500mg - 3 times a day",
    "Vitamin D supplements - Once daily",
  ];

  return (
    <ul style={styles.list}>
      {prescriptions.map((prescription, index) => (
        <li key={index} style={styles.listItem}>
          {prescription}
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

export default Prescriptions;
