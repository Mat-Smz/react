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
        <div className="completCard">
          <h1> {result.title}</h1>
          <p>
            Capital: <b> {result.capital}</b>
            <br />
            Population: <b> {result.population}</b>
            <br />
            Region: <b> {result.region}</b>
          </p>

          <img src={`${result.img}`} alt={result.title} width="250px" />
        </div>
      </Modali.Modal>
    </div>
  );
};

export default Card;
