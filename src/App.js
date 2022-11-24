import React, { useState } from 'react';
import './App.css';
const gifts = [
  'Gift 1',
  'Gift 2',
  'Gift 3',
];

function App() {

  const [gift, setGift] = useState();

  const onClickGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }

  return (
      <div>
        <h1>{gift || "Chưa có phần thưởng"}</h1>
        <button onClick={onClickGift}>Rút</button>
      </div>
  );
}

export default App;
