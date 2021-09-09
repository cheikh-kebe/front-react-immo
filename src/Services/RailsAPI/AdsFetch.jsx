import { API_URL } from "../../Config/config";
import Cookies from "js-cookie";
import axios from "axios";

const API = axios.create({ baseURL: API_URL });


export default class APIAdsManager {
  static async getAds(id) {
    const authorizedConfig = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    const response = await API.get(
      `/real_estate_ads/${id}`,
      authorizedConfig
    );
    return response;
  }
  static async createRealEstateAd(title,description, price, city, image) {
    const authorizedConfig = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };
    let data = new FormData();
    data.append('title',title);
    data.append('description',description);
    data.append('price',price);
    if (image)(data.append('image', image))
    data.append('city',city);
  

    const response = await API.post(
      "/real_estate_ads",
      data,
      authorizedConfig
    );
    return response;
  }

  static async updateRealEstateAd(id,title,description, price, city, image) {
    const authorizedConfig = {
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };
    let data = new FormData();
    data.append('title',title);
    data.append('description',description);
    data.append('price',price);
    if (image)(data.append('image', image))
    data.append('city',city);
  

    const response = await API.put(
      `/real_estate_ads/${id}`,
      data,
      authorizedConfig
    );
    return response;
  }
  static async deleteRealEstateAd(id) {
    const authorizedConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };
    const response = await API.delete(
      `/real_estate_ads/${id}`,
      authorizedConfig
    );
    return response;
  }
  
}