import React, { createContext, useContext, useState } from "react";
// import { productsInfo } from "./context/ProductsInfo";

const CartContext = createContext();

// 커스텀 훅
const useCart = () => useContext(CartContext);

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
  const removeCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => productId !== item.id));
  };

  // 카트 상품 총 개수
  const getTotalCount = () =>
    cart.reduce((total, item) => total + item.count, 0);

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, getTotalCount }}>
      {children}
    </CartContext.Provider>
  );
};

function Header() {
  const { getTotalCount } = useCart();
  return (
    <>
      <h1>쇼핑몰</h1>
      <p>카트에 있는 상품 개수: {getTotalCount()}</p>
    </>
  );
}

function ProductList() {
  const { addCart } = useCart();

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
            <button type="button" onClick={() => addCart(product)}>
              카트에 추가
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function CartList() {
  const { cart, removeCart } = useCart();

  return (
    <>
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - 수량: {item.count}
              <button onClick={() => removeCart(item.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function AppEx9() {
  return (
    <CartProvider>
      <Header />
      <ProductList />
      <CartList />
    </CartProvider>
  );
}
