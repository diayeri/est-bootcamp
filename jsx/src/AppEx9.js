import React, { createContext, useContext, useState } from "react";
// import { productsInfo } from "./context/ProductsInfo";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 카트에 상품 추가하기
  const addCart = (product) => {
    setCart((prevCart) => {
      // 카트에 이미 상품이 존재하는지
      const isExist = prevCart.find((item) => product.id === item.id);

      // 상품이 이미 존재하는 경우
      if (isExist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }

      // 상품이 처음 들어가는 경우
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  // 카트에서 제거하기
  const removeCart = () => {};

  // 카트 상품 총 개수
  const getTotalCount = () => {};

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, getTotalCount }}>
      {children}
    </CartContext.Provider>
  );
};

function Header() {
  return (
    <>
      <h1>쇼핑몰</h1>
      <p>
        카트에 있는 상품 개수:
        {/* {carts.reduce((a, c) => a + c)} */}
      </p>
    </>
  );
}

function ProductList() {
  const { addToCart } = useContext(CartContext);

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
            <button type="button" onClick={() => addToCart(product)}>
              카트에 추가
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function CartList() {
  return (
    <>
      <h2>장바구니</h2>
      {/* {!carts.length ? <p>장바구니가 비어있습니다.</p> : <ul></ul>} */}
    </>
  );
}

export default function AppEx9() {
  return (
    <CartProvider>
      <ProductList />
      <CartList />
    </CartProvider>
  );
}
