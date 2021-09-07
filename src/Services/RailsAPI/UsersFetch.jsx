import { API_URL } from "../../Config/config";
import Cookies from "js-cookie";
import axios from "axios";

const API = axios.create({ baseURL: API_URL });


const registerToken = (token) => {
  token = token.replace(/Bearer /g, "");
  Cookies.set("token", token);
};

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};


export default class APIAdsManager {
  static async register(email, password) {
    const response = await API.post(
      "/users",
      { user: { email, password } },
      config
    );

    let token = await response.headers.authorization;
    console.log(response);

    token ? registerToken(token) : Cookies.set("isLogged?", "false");
    this.login(email, password);
    return response;
  }
  static async logout() {
    const authorizedConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };
    const response = await API.delete("/users/sign_out", authorizedConfig);
    console.log(response);
    Cookies.remove("token");
    return response;
  }

  static async login(email, password) {
    const response = await API.post(
      "/users/sign_in",
      { user: { email, password } },
      config
    );

    let token = await response.headers.authorization;
    console.log(response);
    token? registerToken(token):Cookies.get('token')
    return response;
  }
}
