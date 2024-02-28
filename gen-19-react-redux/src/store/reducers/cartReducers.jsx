// reducers.js
import { UPDATE_DATA_CART } from "../types";

const initialState = {
  dataCart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA_CART:
      const { data, qty, prod, color, size } = action.payload;
      const existingItemIndex = state.dataCart.findIndex(
        (item) =>
          item.id === data.id &&
          item.size === size &&
          item.color === color
      );
      console.log("index ",existingItemIndex)
      if (existingItemIndex !== -1) {
        const newDataCart = [...state.dataCart];
        newDataCart[existingItemIndex].qty += qty; // Update the quantity
        return { ...state, dataCart: newDataCart };
      } else {
        console.log({...state,
          dataCart: [
            ...state.dataCart,
            { ...data, qty, prod, color, size },
          ]})
        return {
          ...state,
          dataCart: [
            ...state.dataCart,
            { ...data, qty, prod, color, size },
          ],
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
