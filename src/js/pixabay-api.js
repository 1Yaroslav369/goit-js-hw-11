import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51405205-50fb9ad3708ee85f3446db19a'; 

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
