import React from "react";

export default function Loading() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src="/dancing.gif"
          alt="dancing loading"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    </div>
  );
}
