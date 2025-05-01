import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
};

const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#0056b3';
};

const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#007bff';
};

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                password,
            });

            const token = response.data.token;
            const iduser = response.data.user.id;
            localStorage.setItem("token", token); 
            localStorage.setItem("iduser", iduser);

            navigate("/lista");
        } catch (err) {
            setError("Credenciales incorrectas o error del servidor.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 w-25">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" className="form-control rounded-0" placeholder="Ingresa tu correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control rounded-0" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <div className="text-danger mb-2">{error}</div>}
                    <button type="submit" className="btn btn-success w-100" style={buttonStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        Iniciar sesión
                    </button>
                    <p></p>
                    <button type="button" className="btn btn-default border w-100" onClick={() => navigate("/registro")}>
                        Crear cuenta
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;