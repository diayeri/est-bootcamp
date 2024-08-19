import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState();
  function clickLike() {
    setLike(like ? "" : "Like");
  }

  return (
    <>
      <button onClick={clickLike}>좋아요 {like}</button>
      {/* 아래 방법도 가능하긴 하다 - 권장X */}
      <button onClick={() => setLike(like ? "" : "Like")}>좋아요 {like}</button>
    </>
  );
}
export default LikeButton;
