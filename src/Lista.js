import React, { useEffect, useState } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();


  const getTasks = async () => {
    const token = localStorage.getItem("token");
    const iduser = localStorage.getItem("iduser");
    try {
      console.log("peticion para consulta de tareas")
      const response = await axios.get(`http://localhost:3000/activities/user/${iduser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      console.log([response.data])
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      navigate("/");
    } else {
      console.log("se va a cargar el listado")
      getTasks();
    }
  }, [navigate]);

  const addTask = async () => {
    const token = localStorage.getItem("token");
    const iduser = localStorage.getItem("iduser");
    const task = {
      name: input,
      description: input,
      createdAt: new Date(),
      completed: false,
      idUser: iduser,
      activated: true
    };

    try {
      await axios.post('http://localhost:3000/activities', task, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setInput('');
      getTasks(); 
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };

  const deleteTask = async (id) => {
    console.log(id)
    const token = localStorage.getItem("token");
 
    try {
      await axios.put(`http://localhost:3000/activities/update/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getTasks(); 
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  const completedTask = async (id) => {
    console.log(id)
    const token = localStorage.getItem("token");
 
    try {
      await axios.put(`http://localhost:3000/activities/completed/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getTasks(); 
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#0056b3';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#007bff';
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-4" style={{ width: '90%', maxHeight: '90vh', overflowY: 'auto' }}>
        <h1 className="mb-4">Listado de Tareas</h1>
        <div className="d-flex mb-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nueva tarea"
            className="form-control me-2"
          />
          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={addTask}
          >
            Agregar
          </button>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Tarea</th>
              <th>Completada</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(tasks) && tasks.map((task, index) => (
              <tr key={task.id || index}  style={{ cursor: 'pointer' }}>
                <td>{index + 1}</td>
                <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.name}
                </td>
                <td>  {task.completed ? 'Sí' : 'No'}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTask(task.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                  {!task.completed && (
                    <button
                      className="btn btn-sm btn-success ms-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        completedTask(task.id);
                      }}
                    >
                      <FaCheck />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
