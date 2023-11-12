const base = "http://localhost:8088/";
const authBase = base + "auth/";
const productBase = base + "product/";

export default {
  base: base,
  register: authBase + "register/",
  login: authBase + "login/",
  logout: authBase + "logout/",
  me: authBase + "me/",
  products: productBase + "list/",
};
