import React, { useState } from "react";

const App = () => {
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
    </div>
  );
};
export default App;
