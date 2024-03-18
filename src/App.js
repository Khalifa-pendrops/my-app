// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleAddTask = () => {
//     if (inputValue.trim() !== '') {
//       setTasks([...tasks, inputValue.trim()]);
//       setInputValue('');
//     }
//   };

//   const handleEditTask = (index, newText) => {
//     const newTasks = [...tasks];
//     newTasks[index] = newText.trim();
//     setTasks(newTasks);
//   };

//   const handleDeleteTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <div className="task-input">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter task..."
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             <input
//               type="text"
//               value={task}
//               onChange={(e) => handleEditTask(index, e.target.value)}
//             />
//             <button onClick={() => handleDeleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleEditTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index] = newText.trim();
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{index + 1}</span>
            <input
              type="text"
              value={task}
              onChange={(e) => handleEditTask(index, e.target.value)}
            />
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
