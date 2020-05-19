import React from "react";
import { useParams, Link } from "react-router-dom";

const Country = (props) => {
  const params = useParams();
  console.log(params.id); // country name

  const { id } = params;

  return (
    <span>
      Country : {id}
      <br />
      <Link to="/">Home</Link>
    </span>
  );
};

export default Country;
