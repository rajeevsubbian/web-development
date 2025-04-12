import React from "react";

function App() {
  setInterval(timefn, 1000);
  // let time = new Date().toLocaleTimeString();
  const [time, getTime] = React.useState(new Date().toLocaleTimeString());

  function timefn() {
    const newTime = new Date().toLocaleTimeString();
    getTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timefn}>Get Time</button>
    </div>
  );
}

export default App;
