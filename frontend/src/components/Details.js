import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/getproduct/${id}`)
      .then((res) => {
        setProduct(res.data.product);
       setColor(res.data.product.color);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>ProductsDetails</h1>
      <ul>
        <li key={product.id}>
          <img src={product?.image} />
          <br />
          {product?.name}
          <br />
          {product?.description}
          <br />
          {color&&color.map((colors, i) => {
            return (
              <input
                type="color"
                id="favcolor"
                name="favcolor"
                value={colors}
              ></input>
            );
          })}
          <br />
          {product.price}
          <br />
          <button style={{ cursor: "pointer" }}>Add To Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default Details;
