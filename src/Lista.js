import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };


  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '10px',
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
      <div className="bg-white p-3 w-25">
        <div style={{ padding: '20px' }}>
          <h1>Listado de Tareas</h1>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nueva tarea"
          />
          <button style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={addTask}>Agregar</button>

          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer'
                }}
                onClick={() => toggleTask(index)}
              >
                {task.text}
                <button className="btn-delete" style={buttonStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>
                  <FaTrash />
                </button>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
