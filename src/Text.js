import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"

const Text = () => {
    const theme = useContext(ThemeContext)

    return (
        <p className={theme}>Using hook useContext</p>
    )
}

export default Text
  