const base = "http/localhost:8088/";
const authBase = base + "auth/";

export default {
  base: base,
  register: authBase + "register/",
  login: authBase + "login/",
  logout: authBase + "logout/",
};
