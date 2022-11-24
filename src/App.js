import React, {useState} from "react";

const datas = ["Nguyễn Văn A", "Nguyễn Văn B", "Nguyễn Thị C"];

function App() {

  const [checked, setChecked] = useState(2);

  const handleSubmit = () => {
    console.log(datas[checked]);
  }

  return (
    <div style={{padding : 32}}>
      {datas.map((data, index) => (
          <div key={index}>
            <input id={"data" + index} type='radio' checked={index === checked ? true : false} onChange={() => setChecked(index)}/>
            <label htmlFor={"data" + index}>{data}</label>
          </div>
      ))
      }
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
