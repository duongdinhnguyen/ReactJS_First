import React, {useState} from "react";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    setTodoList((preTodo) => [...preTodo, todo]);
    setTodo('');
  }

  const changeInput = (e) => {
    setTodo(e.target.value);
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
