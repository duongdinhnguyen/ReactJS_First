import { useContext } from "react"
import { CHANGE_TODO, UPDATE_TODO, Context, setTodo } from "../store"

const FormUpdate = ({ index, handleStateUpdate }) => {
    const [state, dispatch] = useContext(Context)

    return (
        <>
            <input onChange={(e) => dispatch(setTodo(CHANGE_TODO, e.target.value))} />
            <button onClick={() => {
                dispatch(setTodo(UPDATE_TODO, '', index))
                dispatch(setTodo(CHANGE_TODO, ''))
                handleStateUpdate()
            }}>submit change</button>
        </>
    )
}

export default FormUpdate