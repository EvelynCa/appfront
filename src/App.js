import React from "react";
import Login from "./Login";
import Lista from "./Lista";
import Registro from "./Registro";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista" element={
            <ProtectedRoute>
              <Lista />
            </ProtectedRoute>
          } />
        <Route path="/registro" element={<Registro />} />
        {/* Redirección si la ruta no existe */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
