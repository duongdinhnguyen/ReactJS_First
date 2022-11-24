import React, {useState} from "react";

function App() {

  const [todoList, setTodoList] = useState(() => JSON.parse(localStorage.getItem('todo')) || [])
  const [todo, setTodo] = useState('')

  const handleAddTodo = () => {
    setTodoList((preTodo) => {
      const newJob = [...preTodo, todo]
      localStorage.setItem('todo', JSON.stringify(newJob))
      return newJob
    });
    setTodo('')
  }

  const changeInput = (e) => {
    setTodo(e.target.value)
  }
  return (
    <div style={{padding : 32}}>
      <input onChange={changeInput} value={todo}/>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {
          todoList.map((item, index) => (
            <li key={index}>
                {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
