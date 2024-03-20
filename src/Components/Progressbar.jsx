import React from "react";

function Progressbar({ progress }) {
  return (
    <div className="progressBar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default Progressbar;
