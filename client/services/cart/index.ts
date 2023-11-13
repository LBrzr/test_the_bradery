import axios from "axios";

import { api, keys, values } from "../../constants/strings";

interface Result<T> {
  error: boolean;
  data?: T;
  msg?: string;
}

/// add to user cart using provided [product.id]
const addToCart = async (productId: string): Promise<Result<Cart>> => {
  try {
    console.log("registering ...");
    const body = { product: productId };
    const result = await axios.post(api.addToCart, body);
    const data = result.data;
    return result.status
      ? { error: false, data }
      : { error: true, msg: "Error " };
  } catch (e: any) {
    return { error: true, msg: values.connectionFailed };
  }
};

export { addToCart };
