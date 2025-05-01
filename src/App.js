import React from "react";
import Login from "./Login";
import Lista from "./Lista";
import Registro from "./Registro";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./navbar";

function App() {

  const token = localStorage.getItem("token");

  return (
    <Router>
      {token && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista" element={
            <ProtectedRoute>
              <Lista />
            </ProtectedRoute>
          } />
        <Route path="/registro" element={<Registro />} />
        {/* Redirección si la ruta no existe */}
        <Route path="*" element={token ? <Lista /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
