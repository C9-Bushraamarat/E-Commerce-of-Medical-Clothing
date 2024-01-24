import React,{useEffect, useState} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios"

const ProductCategory = () => {
 const navigate=useNavigate();
  const[products,setProducts]=useState([])
    const{id}=useParams();
    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:5000/products/getproduct/category/${id}`).then((res) => {
           setProducts(res.data.products);
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
       
      }, [id]);
      useEffect(() => {
        axios.get(`http://localhost:5000/products/getproduct/${id}`).then((res) => {
           setProducts(res.data.products.id);
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
       
      }, [id]);
  return (
    <div>
    <h1>Products</h1>
    <ul>
      {products&&products.map((product,i) => (
        <li key={product.id}><img src={product.image}/><br/>{product.name}<br/><button style={{ cursor: "pointer" }}onClick={(e)=>{navigate(`/product/${product._id}`)}}>View</button></li>
      ))}
    </ul>
  </div>
  )
}

export default ProductCategory