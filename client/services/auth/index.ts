import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { api, keys, values } from "../../constants/strings";

interface Result<T> {
  error: boolean;
  data?: T;
  msg?: string;
}

/// creates a new user in using provided [email] and [password]
const registerUser = async (
  email: string,
  password: string
): Promise<Result<string>> => {
  try {
    console.log("registering ...");
    const body = { email, password };
    const result = await axios.post(api.register, body);
    return result.status ? { error: false } : { error: true, msg: "Error " };
  } catch (e: any) {
    return { error: true, msg: values.connectionFailed };
  }
};

/// logs user in using provided [email] and [password]
/// and saves received token in [SecureStorage]
const logUserIn = async (
  email: string,
  password: string
): Promise<Result<User>> => {
  try {
    console.log("loging in ...");
    const response = await axios.post(api.login, { email, password });

    const data = response.data;
    const token = data.authentication.token;

    // set gotten as default for all up coming requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // save token
    await AsyncStorage.setItem(keys.token, token);

    return { error: false, data };
  } catch (e: any) {
    return { error: true, msg: values.wrongUsernameOrPwd };
  }
};

/// logs user out
/// and deletes user's token and data stored in [SecureStorage]
const logUserOut = async (): Promise<Result<string>> => {
  try {
    console.log("loging out ...");
    await axios.post(api.logout);

    // undo axios default configs
    axios.defaults.headers.common["Authorization"] = "";

    // remove token
    await AsyncStorage.removeItem(keys.token);

    return { error: false };
  } catch (e: any) {
    return { error: true, msg: e.response.data.msg };
  }
};

/// returns loged in user token if exists
/// also sets it as default axios authorization
const loadUser = async (): Promise<Result<User>> => {
  console.log("loading token ...");
  const token = await AsyncStorage.getItem(keys.token);
  console.log("token: ", token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await axios.get(api.me);
    const data = result.data;
    return { error: false, data };
  } else {
    return { error: true, msg: values.noStoredToken };
  }
};

export { registerUser, logUserIn, logUserOut, loadUser as loadToken };
