import React from "react";

const Card = (result) => {
  return (
    <div class="card">
      <img src={`${result.img}`} alt={result.title} width="120px" />
      <h2>{result.title}</h2>
      {/* <h3>{result.capital}</h3> */}
    </div>
  );
};

export default Card;
