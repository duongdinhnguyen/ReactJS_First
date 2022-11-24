import React, {useState} from "react";

const datas = ["Nguyễn Văn A", "Nguyễn Văn B", "Nguyễn Thị C"];

function App() {

  const [checked, setChecked] = useState([]);

  const handleSubmit = () => {
    console.log(checked);
  }

  const handleChecked = (index) => {
    setChecked((preChecked) => {
      if (preChecked.includes(index)) {
        return preChecked.filter(item => item !== index);
      }
      else {
        return [...preChecked, index];
      }
    });
  }

  const isChecked = (index) => checked.includes(index);
  return (
    <div style={{padding : 32}}>
      {datas.map((data, index) => (
          <div key={index}>
            <input id={"data" + index} type='checkbox' checked={ isChecked(index) } onChange={() => handleChecked(index)}/>
            <label htmlFor={"data" + index}>{data}</label>
          </div>
      ))
      }
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
