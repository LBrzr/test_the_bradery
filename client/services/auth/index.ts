import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { api, keys } from "../../constants/strings";

interface Result {
  error: boolean;
  token?: string;
  msg?: string;
}

/// creates a new user in using provided [email] and [password]
const registerUser = async (
  email: string,
  password: string
): Promise<Result> => {
  try {
    await axios.post(api.register, { email, password });
    return { error: false };
  } catch (e: any) {
    return { error: true, msg: e.response.data.msg };
  }
};

/// logs user in using provided [email] and [password]
/// and saves received token in [SecureStorage]
const logUserIn = async (email: string, password: string): Promise<Result> => {
  try {
    const response = await axios.post(api.register, { email, password });

    const token = response.data.token;

    // set gotten as default for all up coming requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // save token
    await SecureStore.setItemAsync(keys.token, token);

    return { error: false, token };
  } catch (e: any) {
    return { error: true, msg: e.response.data.msg };
  }
};

/// logs user out
/// and deletes user's token and data stored in [SecureStorage]
const logUserOut = async (): Promise<Result> => {
  try {
    await axios.post(api.logout);

    // undo axios default configs
    axios.defaults.headers.common["Authorization"] = "";

    // remove token
    await SecureStore.deleteItemAsync(keys.token);

    return { error: false };
  } catch (e: any) {
    return { error: true, msg: e.response.data.msg };
  }
};

/// returns loged in user token if exists
/// also sets it as default axios authorization
const loadToken = async (): Promise<Result> => {
  const token = await SecureStore.getItemAsync(keys.token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return { error: false, token };
  } else {
    return { error: true, msg: "No stored token !" };
  }
};

export { registerUser, logUserIn, logUserOut, loadToken };
