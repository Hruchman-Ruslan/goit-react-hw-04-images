import axios from 'axios';

const API_KEY = '34857293-d887ff6e825f27144b92f86d1';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (query, page) => {
  const params = {
    q: query,
    key: API_KEY,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };

  const response = await axios.get('/', {
    params,
  });

  console.log(response.data);
  return response.data;
};
