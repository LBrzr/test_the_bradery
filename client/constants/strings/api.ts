const base = "http://localhost:8088/";
const authBase = base + "auth/";
const productBase = base + "product/";
const cartBase = base + "cart/";

export default {
  base: base,
  register: authBase + "register/",
  login: authBase + "login/",
  logout: authBase + "logout/",
  me: authBase + "me/",
  products: productBase + "list/",
  order: cartBase + "validate/",
  cart: cartBase,
  addToCart: cartBase + "add/",
  removeFromCart: cartBase + "remove/product/",
  emptyCart: cartBase + "empty/",
};
