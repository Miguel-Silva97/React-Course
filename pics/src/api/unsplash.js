import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xFGUbCXXP3T_lgIi_cG5wmvqdW9_vcWp58Igy8EhZGs",
  },
});
