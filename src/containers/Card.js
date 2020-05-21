import React from "react";
import Modali, { useModali } from "modali";

const Card = (result) => {
  const [exampleModal, toggleExampleModal] = useModali();

  return (
    <div className="card">
      <div onClick={toggleExampleModal}>
        <img
          src={`${result.img}`}
          alt={result.title}
          width="120px"
          height="80px"
        />
        <h2>{result.title}</h2>
      </div>

      <Modali.Modal {...exampleModal}>
        <h1> {result.title}</h1>
        <p>
          capital: <b> {result.capital}</b>
        </p>

        <img src={`${result.img}`} alt={result.title} width="150px" />
      </Modali.Modal>
    </div>
  );
};

export default Card;
