import axios from 'axios';

 const KEY = "39d6833137272dd1d732fb13910a9756";
 const   BASE_URL = "https://api.themoviedb.org/3"

const trending = '/trending/all/day'

 const queryTrending = async (strSearch, pageNumber) => {
  const param = new URLSearchParams({
    api_key: KEY,
   // q: strSearch,
    //safesearch: true,
    // image_type: 'photo',
    // orientation: 'horizontal',
    // page: pageNumber,
    // per_page: 12,
  });
  const queryUrl =`${BASE_URL}${trending}?${param.toString()}`;
  const response = await axios
    .get(queryUrl)
    .catch(error => {
      throw new Error(error.message);
    });
  if (!response) {
    throw new Error(response.status);
  }
  return response.data;
};
export {queryTrending};