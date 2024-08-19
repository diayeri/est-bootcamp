import React from "react";

export default function MoodScreen(props) {
  return (
    <div className="box-screen">
      <h2>{props.mood || "아직 선택하지 않았어요"}</h2>
    </div>
  );
}
