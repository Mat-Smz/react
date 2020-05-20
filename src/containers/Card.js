import React from "react";
import Modali, { useModali } from "modali";

const Card = (result) => {
  const [exampleModal, toggleExampleModal] = useModali();

  return (
    <div className="card">
      <div className="app">
        <div onClick={toggleExampleModal}>
          <img src={`${result.img}`} alt={result.title} width="120px" />
          <h2>{result.title}</h2>
        </div>
        {/* <h3>{result.capital}</h3> */}

        <Modali.Modal {...exampleModal}>
          <div className="card">
            <h1> {result.title}</h1>
            <p>
              capital: <b> {result.capital}</b>
            </p>

            <img src={`${result.img}`} alt={result.title} width="150px" />
          </div>
        </Modali.Modal>
      </div>
    </div>
  );
};

export default Card;
