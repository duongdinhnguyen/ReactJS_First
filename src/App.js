import React, {useState, useEffect} from "react";
import Content from "./Content";

function App() {
  const [check, setCheck] = useState(false)

  const handleClick = () => setCheck(!check)

  return ( 
    <div>
      <button onClick={handleClick}>Click</button>
      {check && <Content/>}
    </div>
  )
}

export default App;