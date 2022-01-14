import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { render } from "react-dom";

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const request = axios.get("https://cat-fact.herokuapp.com/facts");
    request.then((response) => {
      setFacts(response.data);
    });
  });

  return (
    <ul>
      {facts.map((fact) => (
        <li> {fact.text} </li>
      ))}
    </ul>
  );
}

const root = document.querySelector(".root");

render(<App />, root);
