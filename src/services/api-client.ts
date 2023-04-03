import axios from "axios";

export default axios.create({
 baseURL: "https://api.rawg.io/api",
 params: {
  key: "55670db41cb04f2c8ba83868d885f0ff",
 },
});
