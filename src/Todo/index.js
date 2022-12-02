import React, { useReducer, useRef } from "react"
import reducer, { initialValue } from './TodoReducer'
import { setTodo } from './TodoAction'
import { SET_TODO, CREATE_TODO, DELETE_TODO } from './TodoConstant'

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  const {todo, todos} = state

  const focusRef = useRef()

  return (
    <div style={{ padding: 100 }}>
      <h2>Todo App with Reducer</h2>
      <div>
        <input value={todo}
          ref={focusRef}
          onChange={(e) => dispatch(setTodo(SET_TODO, e.target.value))}
        />
        <button 
          onClick={() => {
            dispatch(setTodo(CREATE_TODO))
            dispatch(setTodo(SET_TODO, ''))
            focusRef.current.focus()
          }}
        > Submit
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo} 
              <button 
                onClick={() => dispatch(setTodo(DELETE_TODO, index))}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
