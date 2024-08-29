import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import useScroll from "./hook/useScroll";
import useMouseLocation from "./hook/useMouseLocation";
import { list } from "postcss";

const AppCustomHook = () => {
  // useScroll();
  // useMouseLocation();

  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const req = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
        if (!req.ok) throw new Error();
        const json = await req.json();
        return setImageData(json);
      } catch (err) {
        console.error("ERR", err);
      }
    };
    fetchImages();
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <Input />
      {/* <button>테스트</button> */}
      <span style={{ marginTop: "100px" }}>span</span>
      <ul>
        {imageData.map((i) => (
          <li key={i.id}>
            <img src={i.download_url} alt={i.author} height={100} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppCustomHook;

// AppEx8 예제 참고
// https://picsum.photos/v2/list?page=1&limit=5
