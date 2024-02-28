// reducers.js
import {
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_ALL_DATA,
  REMOVE_DATA,
  UPDATE_DATA_CART,
} from "../types";
import { ADD_DATA_CART } from "../types";

const initialState = {
  dataCart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_CART:
      let { data, qty, prod, color, size } = action.payload;
      let existingItemIndex = state.dataCart.findIndex(
        (item) =>
          item.id === data.id && item.size === size && item.color === color
      );
      console.log("index ", existingItemIndex);
      if (existingItemIndex !== -1) {
        const newDataCart = [...state.dataCart];
        newDataCart[existingItemIndex].qty += qty; // Update the quantity
        return { ...state, dataCart: newDataCart };
      } else {
        console.log({
          ...state,
          dataCart: [...state.dataCart, { ...data, qty, prod, color, size }],
        });
        return {
          ...state,
          dataCart: [...state.dataCart, { ...data, qty, prod, color, size }],
        };
      }
    case REMOVE_ALL_DATA:
      return {
        ...state,
        dataCart: [],
      };

    case REMOVE_DATA:
      const newDataCart = state.dataCart.filter(
        (item) => item !== action.payload
      );
      return { ...state, dataCart: newDataCart };

    case INCREMENT_QUANTITY:
      let { id:incid, color:inccolor, size:incsize } = action.payload;
      let existingInc = state.dataCart.findIndex(
        (item) =>
          item.id === incid && item.size === incsize && item.color === inccolor
      );
      if(existingInc !== -1){
        const newCartInc = [...state.dataCart]
        newCartInc[existingInc].qty+=1
        return{...state, dataCart:newCartInc}
      }
      else return{...state, dataCart: state.dataCart}

    case DECREMENT_QUANTITY:
      let { id:decid, color:deccolor, size:decsize } = action.payload;
      let existingDec = state.dataCart.findIndex(
        (item) =>
          item.id === decid && item.size === decsize && item.color === deccolor
      );
      if (existingDec !== -1) {
        const newDataCartDec = [...state.dataCart];
        if (newDataCartDec[existingDec].qty > 1) newDataCartDec[existingDec].qty--; // Update the quantity
        return { ...state, dataCart: newDataCartDec };
      }
      else return{...state, dataCart: state.dataCart}


    case UPDATE_DATA_CART:
      const newdata = action.payload;
      console.log("reducer ", newdata);
      return {
        ...state,
        dataCart: newdata,
      };

    default:
      return state;
  }
};

export default cartReducer;
