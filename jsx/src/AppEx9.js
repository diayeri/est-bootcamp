import React, { createContext, useContext, useState } from "react";
// import { productsInfo } from "./context/ProductsInfo";

const CartContext = createContext();
const CartProvider = () => {
  const [cart, setCart] = useState([]);

  // 카트에 상품 추가하기
  const addCart = () => {};

  // 카트에서 제거하기
  const removeCart = () => {};

  // 카트 상품 총 개수
  const getTotalCount = () => {};
};

function ProductList({ carts, setCarts }) {
  const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
  ];

  return (
    <>
      <h2>상품목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₩{product.price}
            <button type="button">카트에 추가</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function CartList({ carts, setCarts }) {
  return (
    <>
      <h2>장바구니</h2>
      {!carts.length ? <p>장바구니가 비어있습니다.</p> : <ul></ul>}
    </>
  );
}

export default function AppEx9() {
  const [carts, setCarts] = useState([]);
  return (
    <div>
      <h1>쇼핑몰</h1>
      <p>카트에 있는 상품 개수: {carts.reduce((a, c) => a + c)}</p>
      <ProductList carts={carts} setCarts={setCarts} />
      <CartList carts={carts} setCarts={setCarts} />
    </div>
  );
}
