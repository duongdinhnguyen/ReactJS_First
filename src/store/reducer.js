import { SET_TODO, CREATE_TODO, UPDATE_TODO, CHANGE_TODO, DELETE_TODO } from './reducerConstant'

const InitialState = {
    todo: '',
    todoUpdate: '',
    todos: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todo: action.data
            }
        case CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, state.todo]
            }
        case CHANGE_TODO:
            return {
                ...state,
                todoUpdate: action.data,
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) todo = state.todoUpdate
                    return todo
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.data)
            }
        default:
            break;
    }
}

export {InitialState, reducer}