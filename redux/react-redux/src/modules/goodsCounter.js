export const increaseNum = () => {
  return { type: "PLUS" };
};

export const decreaseNum = () => {
  return { type: "MINUS" };
};

const initialState = {
  stock: 3,
  goods: 1,
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1,
      };

    case "MINUS":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };
    default:
      return state;
  }
};

export default goodsReducer;
