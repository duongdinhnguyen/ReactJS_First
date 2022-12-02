// Reducer

import {SET_TODO, CREATE_TODO, DELETE_TODO} from './TodoConstant'

export const initialValue = {
    todo: '',
    todos: []
}

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

export default reducer