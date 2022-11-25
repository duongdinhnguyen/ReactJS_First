import { clear } from "@testing-library/user-event/dist/clear";
import React, {useState, useEffect} from "react"


function Content() {
    const [countdown, setCountDown] = useState(180);

  useEffect(() => {
    const countdown = setInterval(() => setCountDown((preCountDown) => preCountDown - 1), 1000)
    
    return () => clearInterval(countdown)

  }, [])

  return ( 
    <div>
      <h1>{countdown}</h1>
    </div>
  )
}

export default Content;