import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a4f5e2b4e0204f0db0ec610288bb3936",
  },
});
