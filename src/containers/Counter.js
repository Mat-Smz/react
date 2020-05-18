import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          // on appelle setCounter pour mettre à jour le state
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <br />
      {counter}
      <br />
      <button
        onClick={() => {
          // on appelle setCounter pour mettre à jour le state
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};
export default Counter;
