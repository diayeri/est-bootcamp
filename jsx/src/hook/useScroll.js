import { useState, useEffect } from "react";

const useScroll = () => {
  const [isBottom, setIsBottom] = useState(false);
  // console.log("총높이", document.documentElement.offsetHeight);
  // console.log("뷰포트높이", window.innerHeight);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log("Scroll");
      // console.log(document.documentElement.scrollTop);
      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight
      );
      console.log(window.innerHeight + document.documentElement.scrollTop);
      console.log(document.documentElement.offsetHeight);
      console.log(isBottom);
    });
  }, []);

  return isBottom;
};

export default useScroll;
