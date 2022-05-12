import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    // console.log("userEffect");
    getAdvice();
  }, []);
  function getAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((responce) => {
        const resp = responce.data.slip.advice;
        // console.log(resp);
        setAdvice(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return <div className="App">
    <div className="card">
      <h1 className="heading">
        {advice}
      </h1>
      <button className="button" onClick={getAdvice}>
        <span>GIVE ME ADVICE!</span>
      </button>
    </div>
  </div>;
}

export default App;
