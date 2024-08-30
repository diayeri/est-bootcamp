import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increaseNum, decreaseNum } from "../modules/goodsCounter";

export default function GoodsCounter() {
  const { stock, goods } = useSelector((state) => {
    return { stock: state.goodsReducer.stock, goods: state.goodsReducer.goods };
  }, shallowEqual);

  const dispatch = useDispatch();

  const onDecreaseNum = () => dispatch(decreaseNum());
  const onIncreaseNum = () => dispatch(increaseNum());

  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span>
        <strong>17,500</strong>원
      </span>
      <div>
        <button type="button" onClick={onDecreaseNum}>
          -MINUS
        </button>
        <span>{goods}</span>
        <button onClick={onIncreaseNum}>+PLUS</button>
      </div>
      <div>
        총 수량 <strong>{goods}</strong>
      </div>
      <div>
        <strong>{goods * 17500}</strong>원
      </div>
      <div>
        재고 <strong>{stock}</strong>
      </div>
    </div>
  );
}
