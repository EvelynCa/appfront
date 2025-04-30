import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    secondName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post("http://localhost:3000/login/register", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Registro exitoso:", response.data);
      setFormData({ name: '', lastName: '', secondName: '', email: '', password: '' }); // limpiar formulario
      setSuccess(true); 
      navigate("/login");
    } catch (error) {
        setError('Hubo un error al registrar. Intenta nuevamente.');
        console.error("Error en el registro:", error.response?.data || error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 w-25">
        <h2 className="text-2xl font-bold mb-6 text-center">Crea una cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Nombre(S)</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre(S)" className="form-control rounded-0" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Apellido Paterno</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Apellido" className="form-control rounded-0" />
          </div>
          <div className="mb-3">
            <label htmlFor="secondName">Apellido Materno</label>
            <input type="text" name="secondName" value={formData.secondName} onChange={handleChange} placeholder="Apellido Materno" className="form-control rounded-0" />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" className="form-control rounded-0" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" className="form-control rounded-0" />
          </div>
          <button type="submit" className="btn btn-success w-100">Registrarse</button>
          <p></p>
          <button type="button" className="btn btn-default border w-100">¿Ya tienes una cuenta?</button>

        </form>
        {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success mt-3" role="alert">
          ¡Registro exitoso!
        </div>
      )}
      </div>
    </div>
  );
}

export default Registro;
