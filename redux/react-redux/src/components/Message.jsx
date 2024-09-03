import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { sale, soldOut } from "../modules/stockCounter";

export default function GoodsCounter() {
  const { stock, message } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
      message: state.stockReducer.message,
    };
  }, shallowEqual);

  // useDispatch() 호출 -> dispatch 함수 반환
  const dispatch = useDispatch();

  const onSale = () => dispatch(sale());
  const onSoldOut = () => dispatch(soldOut());

  useEffect(() => {
    if (stock > 0) {
      onSale();
    } else {
      onSoldOut();
    }
  });

  return (
    <div>
      <strong>{message}</strong>
    </div>
  );
}
