import axios from "axios";

import { api, values } from "../../constants/strings";

interface Result<T> {
  error: boolean;
  data?: T;
  msg?: string;
}

/// fetchs all product
const fetchProducts = async (): Promise<Result<Product[]>> => {
  try {
    console.log("fetching products ...");
    const result = await axios.get(api.products);
    const data = result.data;
    console.log(`${data.length} products got !`);
    return { error: false, data };
  } catch (e: any) {
    return { error: true, msg: values.connectionFailed };
  }
};

export { fetchProducts };
