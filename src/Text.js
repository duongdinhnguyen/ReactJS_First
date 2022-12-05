import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"

const Text = () => {
    const data = useContext(ThemeContext)

    return (
        <p className={data.theme}>Using hook useContext</p>
    )
}

export default Text
  