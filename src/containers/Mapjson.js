import React from "react";
import { Link } from "react-router-dom";
import countryList from "./country.json";

const Mapjson = () => {
  const add = "/country/";
  const Items = countryList.map((item, index) => (
    // Ne faire ceci que si les éléments n'ont pas d'ID stable
    <li key={index}>
      <Link to={add + item.name}>{item.name}</Link>
    </li>
  ));
  return (
    <div>
      <p>Map() of a json file </p>
      <ul>{Items}</ul>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};
export default Mapjson;
