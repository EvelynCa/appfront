import React from "react";

function Registro() {
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 w-25">
                <h2 className="text-2xl font-bold mb-6 text-center">Crea una cuenta</h2>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="name">Nombre(S)</label>
                        <input type="text" placeholder="Nombre(S)" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName">Apellido Paterno</label>
                        <input type="text" placeholder="Apellido" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="secondName">Apellido Materno</label>
                        <input type="text" placeholder="Apellido Materno" className="form-control rounded-0" />
                    </div>
                    <div>
                        <label >Género</label>
                        <select className="form-control rounded-0">
                            <option value="">Selecciona un género</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <p></p>
                    <div className="mb-3">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" placeholder="Correo electrónico" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" placeholder="Contraseña" className="form-control rounded-0" />
                    </div>
                    <button className="btn btn-success  w-100">Registrarse</button>
                    <p></p>
                    <button className="btn btn-default border  w-100">¿Ya tienes una cuenta?</button>
                </form>
            </div>
        </div>
    )
}

export default Registro;