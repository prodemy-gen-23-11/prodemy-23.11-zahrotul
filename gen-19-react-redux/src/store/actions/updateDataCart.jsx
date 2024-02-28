// actions.js
import { UPDATE_DATA_CART } from "../types";

export const updateDataCart = (data, qty, prod, color, size) => ({
  type: UPDATE_DATA_CART,
  payload: { data, qty, prod, color, size },
});
