import React from "react";

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
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 w-25">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" placeholder="Ingresa tu correo electrónico" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" placeholder="Ingresa tu contraseña" className="form-control rounded-0" />
                    </div>
                    <button className="btn btn-success w-100" style={buttonStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>Iniciar sesión</button>
                    <p></p>
                    <button className="btn btn-default border w-100" onclick="Registro()">Crear cuenta</button>
                </form>
            </div>
        </div>
    )
}

export default Login;