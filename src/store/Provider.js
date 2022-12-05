import { useReducer } from "react"
import { Context } from "./Context"
import { InitialState, reducer } from "./reducer"

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, InitialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider