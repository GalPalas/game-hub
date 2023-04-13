import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bf6e3eeb37414a40b97af74ec382df5c",
  },
});
