import axios from "axios";

import { api, keys, values } from "../../constants/strings";
import Cart from "../../types/cart";

interface Result<T> {
  error: boolean;
  data?: T;
  msg?: string;
}

/// add to user cart using provided [product.id]
const addToCart = async (productId: string): Promise<Result<Cart>> => {
  try {
    console.log("adding to cart ...");
    const body = { product: productId };
    const result = await axios.post(api.addToCart, body);
    const data = new Cart(result.data._id, result.data.lines);
    console.log(data, ": cart");
    return result.status
      ? { error: false, data }
      : { error: true, msg: "Error " };
  } catch (e: any) {
    return { error: true, msg: values.connectionFailed };
  }
};

/// remove from user cart using provided [product.id]
const removeFromCart = async (productId: string): Promise<Result<Cart>> => {
  try {
    console.log("removing from cart ...");
    const result = await axios.delete(api.removeFromCart + productId);
    const data = new Cart(result.data._id, result.data.lines);
    console.log(data, ": cart");
    return result.status
      ? { error: false, data }
      : { error: true, msg: "Error " };
  } catch (e: any) {
    return { error: true, msg: values.connectionFailed };
  }
};

/// empty user cart
const emptyCart = async (): Promise<Result<Cart>> => {
  try {
    console.log("empting cart ...");
    const result = await axios.delete(api.emptyCart);
    const data = new Cart(result.data._id, result.data.lines);
    console.log(data, ": cart");
    return result.status
      ? { error: false, data }
      : { error: true, msg: "Error " };
  } catch (e: any) {
    return { error: true, msg: values.connectionFailed };
  }
};

/// fetch user cart
const loadCart = async (): Promise<Result<Cart>> => {
  try {
    console.log("loading cart ...");
    const result = await axios.get(api.cart);
    const data = new Cart(result.data._id, result.data.lines);
    console.log(data, ": cart");
    return result.status
      ? { error: false, data }
      : { error: true, msg: "Error " };
  } catch (e: any) {
    return { error: true, msg: values.connectionFailed };
  }
};

export { addToCart, emptyCart, loadCart, removeFromCart };
