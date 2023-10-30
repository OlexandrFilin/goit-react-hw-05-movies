
import {  Route, Routes } from "react-router-dom";

import Layout from "components/Layout/Layout";
import { lazy } from "react";



const HomePage= lazy(() => import("../components/pages/Home"));
const Movies= lazy(() => import("../components/pages/Movies"));
const Actors= lazy(() => import("../components/Actors/Actors"));
const Reviews= lazy(() => import("../components/Reviews/Reviews"));
const MovieCard = lazy(() => import("../components/MovieDetails/MovieDetails"));

export const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>  
      <Route path="movies"  element={<Movies/>}/>
       <Route path="movies/:movieId" element={<MovieCard/> }>  
        <Route path="cast"  element={<Actors/>}/>
      <Route path="reviews"  element={<Reviews/>}/>
      </Route>
      </Route>

    </Routes>
        </>
  );
};
