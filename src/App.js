import React, { useState } from "react";
import Content from "./Content";

function App() {
  const [data, setData] = useState(0)

  return (
    <>
      <Content data={data} />
      <label>{data}</label>
      <button onClick={() => setData((pre) => pre + 1)}>Tăng data</button>
    </>
    
  )
}

export default App;
