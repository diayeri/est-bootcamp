import React, { useContext, useState } from "react";
import { productsInfo } from "./context/ProductsInfo";

function ProductList({ carts, setCarts }) {
  const products = useContext(productsInfo);
  const addCart = (item) => {
    setCarts([...carts]((carts[item.id - 1] += 1)));
  };
  return (
    <>
      <h2>상품목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₩{product.price}
            <button type="button" onClick={() => addCart(product)}>
              카트에 추가
            </button>
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
