import React from "react";

function App() {
  // const state = React.useState(12345);
  const [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
