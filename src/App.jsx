import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">
          Student Budget Tracker
        </h1>
      </div>
    </>
  );
}

export default App;
