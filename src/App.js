import React, {useState, useEffect} from "react";
import Content from "./Content";

function App() {
  const [data, setData] = useState([])
  const [check, setCheck] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(json => setData(json))
  },[])

  const handleClick = () => setCheck(!check)

  return ( 
    <div>
      <button onClick={handleClick}>Click</button>
      {check && <Content users={data}/>}
    </div>
  )
}

export default App;