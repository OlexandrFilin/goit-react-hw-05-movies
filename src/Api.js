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
  
  const queryUrl =`${BASE_URL}/movie/${idCard}?api_key=${KEY}`;  
 
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
  const queryUrl =`${BASE_URL}/search/movie?query=${stringSearch}&include_adult=false&language=en-US&page=1'&api_key=${KEY}`;  
  
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

const actorsView = async (idCard) => {
  const queryUrl =`${BASE_URL}/movie/${idCard}/credits?api_key=${KEY}`; 
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

const reviews= async (idCard) => {
  const queryUrl =`${BASE_URL}/movie/${idCard}/reviews?api_key=${KEY}`; 
 // console.log('queryUrl', queryUrl)
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

export {queryTrending, queryCardMovie, querySearch,actorsView, reviews };