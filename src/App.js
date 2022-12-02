import React, {useReducer} from "react";

// Initial Value
const initialValue = 0

// defined const
const UP = 'up'
const DOWN = 'down'

// custom function action reducer
const reducer = (state, action) => {
  switch (action) {
    case UP:
      return state + 1
    case DOWN:
      return state - 1
  
    default:
      break;
  }

}

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue) // Khởi tạo reducer

  return (
    <>
      <h1>{count}</h1>
      <br></br>
      <button onClick={() => dispatch(UP)}>Up</button> {/* nhận vào action UP, tương ứng sẽ là tăng count lên và update state*/}
      <button onClick={() => dispatch(DOWN)}>Down</button>
    </>
  );
}

export default App;
