import { useState, useEffect } from "react";

const useMouseLocation = () => {
  const [mouseLocation, setMouseLocation] = useState({ x: null, y: null });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouseLocation({ x: e.screenX, y: e.screenY });
    });
  }, []);

  return mouseLocation;
};

export default useMouseLocation;
