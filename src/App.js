import "./App.css";
import { useState, useEffect } from "react";

const dummyData = [
  { id: "123", name: "test1" },
  { id: "456", name: "test2" },
  { id: "789", name: "test3" },
];

function App() {
  const [_counter, _setCounter] = useState(0);

  const incriment = () => {
    _setCounter(_counter + 1);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div>Count: {_counter}</div>
      <button onClick={incriment}>+</button>
      {dummyData.map((el) => {
        return (
          <div>
            id:{el.id}- Name:{el.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
