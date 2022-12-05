import React, {useRef, useState} from "react";
import { useContext } from "react";
import { Context } from "./store";
import { SET_TODO, CREATE_TODO, DELETE_TODO } from "./store";
import {setTodo} from './store'
import {FormUpdate} from './component'

function App() {
  const [state, dispatch] = useContext(Context)
  const [update, setUpdate] = useState()
  const focusRef = useRef()
  const {todo, todos} = state

  const handleStateUpdate = () => setUpdate()

  return (
    <div>
      <div style={{ padding: 60}}>
        <input 
          ref={focusRef}
          value={todo} 
          onChange={(e) => dispatch(setTodo(SET_TODO, e.target.value))}
        />
        <button
          onClick={() =>{
            dispatch(setTodo(CREATE_TODO))
            dispatch(setTodo(SET_TODO, ''))
            focusRef.current.focus()
          }}
        >Add</button>
      </div>
      <div>
        <ul>
          {
            todos.map((todo, index) => (
              <li key={index}>
                {todo}
                { index === update && <FormUpdate index={index} handleStateUpdate={handleStateUpdate} /> }
                <button 
                  style={{ marginLeft: 20 }}
                  onClick={() =>setUpdate(index)}
                >
                  Change
                </button>
                <button 
                  style={{ marginLeft: 20 }}
                  onClick={() => dispatch(setTodo(DELETE_TODO, index))}
                >
                  x
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    );
}

export default App;
