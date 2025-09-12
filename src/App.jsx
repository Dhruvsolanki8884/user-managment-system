import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import SuccessPage from "./components/SuccessPage";

function App() {
  const [users, setUsers] = useState([]); // store registered users
  const [authUser, setAuthUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Default route → go to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login page */}
        <Route
          path="/login"
          element={<LoginPage users={users} setAuthUser={setAuthUser} />}
        />

        {/* Register page */}
        <Route
          path="/register"
          element={<RegistrationPage setUsers={setUsers} />}
        />

        {/* Success page */}
        <Route path="/success" element={<SuccessPage authUser={authUser} />} />

        {/* 404 fallback */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

