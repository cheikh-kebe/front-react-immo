import { API_URL } from '../Config/config';

export const fetchDataIndex = (setData, fetchUrl) => {
  fetch(`${API_URL}${fetchUrl}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
};
