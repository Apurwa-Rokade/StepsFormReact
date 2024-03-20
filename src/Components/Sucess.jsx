import React, { useContext, useEffect } from "react";
import { multistepContext } from "../Context/StepContext";

function Sucess() {
  const [fact, setFact] = React.useState("");
  const { userData } = useContext(multistepContext);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setFact(data.fact);
      });
  }, []);
  return (
    <div>
      <div className="success-container">
        <div className="message">
          <h2>Congratulations, your info is registered.</h2>
          <div className="info">
            <p>
              <strong>First Name:</strong> {userData["firstname"]}
            </p>
            <p>
              <strong>Last name:</strong> {userData["lastname"]}
            </p>
            <p>
              <strong>Email:</strong> {userData["email"]}
            </p>
          </div>
          <p>Here’s a fact for you:</p>
          <p id="fact">{fact}</p>
        </div>
      </div>
    </div>
  );
}

export default Sucess;
