import React, { useEffect, useRef, useState } from "react";
import Input from "./components/Input";
import useScroll from "./hook/useScroll";
import useMouseLocation from "./hook/useMouseLocation";
import Loading from "./components/Loading";
import { list } from "postcss";
import ImageList from "./components/ImageList";

const AppCustomHook = () => {
  // useMouseLocation();

  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchImages = async (page) => {
    setIsLoading(true);
    try {
      const req = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
      );
      if (!req.ok) throw new Error();
      const json = await req.json();
      setImageData((pre) => pre + json);
      setIsLoading(false);
    } catch (err) {
      console.error("ERR", err);
      setIsLoading(false);
    }
  };

  // useEffect는 fetch실행시만 적용해도 됨
  useEffect(() => {
    // 추가된것만 새로 불러오는 방법이 있을텐데...
    fetchImages(page);
  }, [page]);

  let isBottom = useScroll();
  // 바닥에 닿으면 새로 fetch 데이터 가져와서
  // 추가로 가져온 이미지 보여주기
  useEffect(() => {
    if (isBottom) {
      setPage(page + 1);
      fetchImages(page);
    }
  }, [isBottom]);

  return (
    <div style={{ height: "200vh" }}>
      <Input />
      {isLoading && <Loading />}
      <ImageList imageData={imageData} />
      {useScroll()}
    </div>
  );
};

export default AppCustomHook;

// AppEx8 예제 참고
// https://picsum.photos/v2/list?page=1&limit=5
