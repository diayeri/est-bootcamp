import { useState } from "react";

function LikeButton() {
  // let like = 0;
  // function clickLike() {
  //   like += 1;
  //   console.log(like);
  // }
  const [like, setLike] = useState(0);
  function clickLike() {
    setLike(like + 1);
    // setLike(like++); 는 사용 불가. 값은 setLike로만 변경가능
  }

  return <button onClick={clickLike}>좋아요 {like}</button>;
}
export default LikeButton;
