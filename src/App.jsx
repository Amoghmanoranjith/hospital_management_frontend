import React, { useState } from "react";
import Role from "./Role";
import Login from "./Login";
import DoctorDash from "./DoctorDash";
import PatientDash from "./PatientDash";

const App = () => {
  const [role, setRole] = useState(""); // To store selected role
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track if the user is logged in

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!role) {
    return <Role onSelectRole={handleRoleSelect} />;
  }
  console.log(role);

  if (!isLoggedIn) {
    return <Login role={role} onLogin={handleLogin} />;
  }
  console.log(isLoggedIn);
  return role === "doctor" ? <DoctorDash /> : <PatientDash />;
};

export default App;
