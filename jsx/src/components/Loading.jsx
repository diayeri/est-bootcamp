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
          alt="loading"
          style={{ width: "100px", height: "auto" }}
        />
        <img
          src="../../dancing.gif"
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
        <img
          src="../assets/loading.gif"
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    </div>
  );
}
