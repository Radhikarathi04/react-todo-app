import React, {useState} from 'react';
import './App.css';

function App() {

  const[input, setInput] = useState("");
  const[todoList, setTodoList] = useState([]);

  const emptyText = '';

  // todays date
  
  // Add task to todolist
  // const addTask = (task) => {
  //   setTodoList([...todoList, {id: nextId++, task: task}])
  //   setInput(''); // clear input box
  // }

  const addTask = (task) => {
    setTodoList((todoList) => [...todoList, {task: task}])
    setInput('');
  }

  return (
    <div>
      <h1 className='title'>To do list</h1>

      <div className='input-container'>
        <input 
        className='input-box'
        type='text' 
        value={emptyText} 
        placeholder='Enter your task' 
        onChange={(e) => setInput(e.target.value)}
        />

        <button className='add-btn' type='submit' onClick={() => addTask(input)}>Add</button>
        </div>

      <ul>
        {todoList.map((task, index) => (
          <li key={index}>
          {task.task}
          <button onClick={() => {
              setTodoList(
                todoList.filter((a, idx) =>
                  index !== idx
                )
              );
            }}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
