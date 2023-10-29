import HomePage from "components/pages/Home";
import Movies from "components/pages/Movies";
import {  Route, Routes } from "react-router-dom";
import { NavApp, NavLinkApp } from "./App.styled";
import  MovieCard  from "./MovieDetails/MovieDetails";
import Actors  from "./Actors/Actors";
import  Reviews  from "./Reviews/Reviews";


// const KEY = "39d6833137272dd1d732fb13910a9756";
//   const   BASE_URL = "https://api.themoviedb.org/3"

  
export const App = () => {

  return (
    <>
    <NavApp>
        <NavLinkApp to={"/"}> Home</NavLinkApp>
        <NavLinkApp to={"/movies"}> Movie</NavLinkApp>
    </NavApp>   
    <Routes>
      <Route path="/" element={<HomePage/>}>   </Route>
      <Route path="/movies"  element={<Movies/>}></Route>
      {/* <Route path="/movieCard" element={<HomePage/>}>   </Route> */}
      <Route path="/movies/:movieId" element={<MovieCard/> }>  
        <Route path="cast"  element={<Actors/>}></Route>
      <Route path="reviews"  element={<Reviews/>}></Route>
      </Route>

    </Routes>
        </>
  );
};
