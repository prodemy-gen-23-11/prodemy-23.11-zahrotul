// actions.js
import { ADD_DATA_CART, REMOVE_ALL_DATA, REMOVE_DATA, UPDATE_DATA_CART } from "../types";

export const addDataCart = (data, qty, prod, color, size) => ({
  type: ADD_DATA_CART,
  payload: { data, qty, prod, color, size },
});

export const updateDataCart = (payload) => ({
  type: UPDATE_DATA_CART,
  payload,
});

export const removeAllDataCart = () => ({
  type: REMOVE_ALL_DATA,
})

export const removeData = (payload) => ({
  type: REMOVE_DATA,
  payload
})
