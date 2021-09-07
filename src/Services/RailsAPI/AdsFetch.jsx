import { API_URL } from "../../Config/config";
import Cookies from "js-cookie";
import axios from "axios";

const API = axios.create({ baseURL: API_URL });


export default class APIAdsManager {
  
  static async createRealEstateAd(title,description, price, city) {
    const authorizedConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };
    const response = await API.post(
      "/real_estate_ads",
      {title,description, price, city},
      authorizedConfig
    );
    return response;
  }
}