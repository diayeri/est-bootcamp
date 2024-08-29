import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import useScroll from "./hook/useScroll";
import useMouseLocation from "./hook/useMouseLocation";
import Loading from "./components/Loading";
import { list } from "postcss";

const AppCustomHook = () => {
  // useScroll();
  // useMouseLocation();

  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const req = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
      if (!req.ok) throw new Error();
      const json = await req.json();
      setImageData(json);
      setIsLoading(false);
    } catch (err) {
      console.error("ERR", err);
      setIsLoading(false);
    }
  };

  // useEffect는 fetch실행시만 적용해도 됨
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <Input />
      <Loading />
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {imageData.map((i) => (
            <li key={i.id}>
              <img src={i.download_url} alt={i.author} height={100} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppCustomHook;

// AppEx8 예제 참고
// https://picsum.photos/v2/list?page=1&limit=5
