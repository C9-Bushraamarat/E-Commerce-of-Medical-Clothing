import React, { useState, useEffect } from "react";
import axios from "axios";
const Product = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(`http://localhost:5000/products/getproduct`).then((res) => {
      setProducts(res.data.products);
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
   
  }, []);
  return (
    <div>
    <h1>Products</h1>
    <ul>
      {products&&products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </div>
  )
}

export default Product