import React from "react";

function Steps({ step }) {
  return (
    <>
      <ul className="tabs">
        <li
          className={step === 1 ? "active" : ""}
          role="tab"
          aria-selected={step === 1}
        >
          Step 1
        </li>
        <li
          className={step === 2 ? "active" : ""}
          role="tab"
          aria-selected={step === 2}
        >
          Step 2
        </li>
        <li
          className={step === 3 ? "active" : ""}
          role="tab"
          aria-selected={step === 3}
          disabled={step !== 3}
        >
          Success
        </li>
      </ul>
    </>
  );
}

export default Steps;
