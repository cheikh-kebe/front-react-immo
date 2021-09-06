import { API_URL } from "../../Config/config";
import Cookies from "js-cookie";
import axios from "axios";

const API = axios.create({ baseURL: API_URL });

const registerToken =(token)=>{
  token = token.replace(/Bearer /g, "");
  Cookies.set("token", token);

}

export default class APIManager {
  static async register(email, password) {
    API.interceptors.request.use(({ headers, ...config }) => ({
      ...config,
      headers: {
        ...headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          headers.Authorization || Cookies.get("token")
        }`,
      },
    }));
    

    const response = await API.post("/users", { user: { email, password } });
    let token = await response.headers.authorization;
    token? registerToken(token) : Cookies.set("isLogged?", "false")
    
    return response;
  
  
  }
  static async logout() {
    const response = await API.delete("/logout");
    return response;
  }
  
  static async login(email, password) {
    API.interceptors.request.use(({ headers, ...config }) => ({
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    }));
    const response = await API.post("/users/sign_in", { user: { email, password } });
    let token = await response.headers.authorization;
    token? registerToken(token) : Cookies.set("isLogged?", "false")
    return response;
  }

}
