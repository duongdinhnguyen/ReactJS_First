// Initial State
// Actions
// Reducer
// Dispatch

import React, {useReducer, useRef} from "react";

const initialValue = {
  todo: '',
  todos: []
}

const setTodo = (type, data) => ({
  type,
  data
})


const SET_TODO = 'set'
const CREATE_TODO = 'create'
const DELETE_TODO = 'delete'

const reducer = (state, action) => {
  let newState
  switch (action.type) {
    case SET_TODO:
      newState = {
        ...state,
        todo: action.data
      }
      break;
    case CREATE_TODO:
      newState = {
        ...state,
        todos: [...state.todos, state.todo],
      }
      break;
    case DELETE_TODO:
      // console.log(action.data)
      newState = {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.data),
      }
      break;
      
    default:
      throw new Error("ACTION TYPE ERROR...")
  }
  // console.log(newState)

  return newState
}

function App() {
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

export default App;
