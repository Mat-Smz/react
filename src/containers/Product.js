import React from "react";
import { useParams, Link } from "react-router-dom";

const Product = (props) => {
  const params = useParams();
  console.log(params.id); // walkman

  // axios.get("http://leboncoin.com/api/product/" + params.id);

  const { id } = params;

  return (
    <span>
      Product {id}
      <br />
      <Link to="/">Home</Link>
    </span>
  );
};

export default Product;
