import React, {useState, useEffect, useRef} from "react"

function Content() {
    const [time, setTime] = useState(180)
    const ref = useRef()

    const handleStart = () => {
        ref.current = setInterval(() => {
            setTime((preTime) => preTime - 1)
        }, 1000)
    }

    const handleEnd = () => {
        clearInterval(ref.current)
    }

  return ( 
    <div>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>End</button>
    </div>
  )
}

export default Content;