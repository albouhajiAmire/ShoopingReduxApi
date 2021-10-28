import { ActionTypes } from "../contants/action-types";
const intialState = {
  products: [],
  // [
  //     // {
  //     //     id:1,
  //     //     title:"xxxx",
  //     //     cataloge:"yyy"
  //     // }
  // ]
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    // return state;

    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return{};
    default:
      return state;
  }
};
