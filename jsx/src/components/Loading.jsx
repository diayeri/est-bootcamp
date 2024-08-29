import React from "react";
import loading from "../assets/loading.gif";

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
          src={loading}
          alt="dancing loading"
          style={{ width: "100px", height: "auto" }}
        />
      </div>
    </div>
  );
}
