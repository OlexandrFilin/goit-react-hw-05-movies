import axios from 'axios';

 const KEY = "39d6833137272dd1d732fb13910a9756";
 const   BASE_URL = "https://api.themoviedb.org/3"

const trending = '/trending/all/day'


 const queryTrending = async (strSearch, pageNumber) => {
  const param = new URLSearchParams({
    api_key: KEY,
   
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

 const queryCardMovie = async (idCard) => {
  // const param = new URLSearchParams({
  //   api_key: KEY,
   
  // });
  //const queryUrl =`${BASE_URL}${trending}?${param.toString()}`;
  const queryUrl ='https://api.themoviedb.org/3/movie/507089?api_key=39d6833137272dd1d732fb13910a9756';  
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

const querySearch = async (stringSearch) => {
  // const param = new URLSearchParams({
  //   api_key: KEY,
   
  // });
  //const queryUrl =`${BASE_URL}${trending}?${param.toString()}`;
  const queryUrl =`https://api.themoviedb.org/3/search/movie?query=${stringSearch}&include_adult=false&language=en-US&page=1'&api_key=39d6833137272dd1d732fb13910a9756`;  

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
export {queryTrending, queryCardMovie, querySearch};