import React, { useState, useMemo, useEffect, useRef } from "react";

function App() {
  const [product, setProduct] = useState({
    name : '',
    price: ''
  })
  const [productList, setProductList] = useState([])
  // const [total, setTotal] = useState(0) // Dùng với state để tính tổng

  const focusRef = useRef()

  const handleSubmit = () => {
    setProductList((pre) => [...pre, product])
    setProduct({
      name : '',
      price: ''
    })
    focusRef.current.focus()
  }
  // Dùng với useMemo
  const total = useMemo(() => {
    return productList.reduce((result, product) => {
      console.log('Tính toán lại ...')
      return result + product.price
    }, 0)
  }, [productList])

  // Dùng với state và useEffect
  // useEffect(() => {
  //   setTotal(() => {
  //     return productList.reduce((result, product) => {
  //       console.log('Tính toán lại ...')
  //       return result + product.price
  //     }, 0)
  //   })
  // }, [productList])

  return (
    <div style={{ padding: "60px" }}>
      <div>
        <input
          ref={focusRef}
          value={product.name}
          onChange={(e) => setProduct({...product, name: e.target.value})}
          placeholder="Nhập tên sản phẩm">
        </input>
        <br></br>
        <input
          value={product.price}
          onChange={(e) => setProduct({...product, price: parseInt(e.target.value)})}
          placeholder="Nhập giá sản phẩm">
        </input>
        <br></br>
        <button onClick={handleSubmit}>Thêm</button>
      </div>
      <div style={{ padding: "60px" }}>
        Total: {total}
      </div>
      <div style={{ padding: "60px" }}>
        <ul>
          {productList.map((item, index) => (
            <li key={index}>
              <div>
                <label>Sản phẩm: </label>
                <span>{item.name}</span>
              </div>
              <div>
                <label>Giá: </label>
                <span>{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
