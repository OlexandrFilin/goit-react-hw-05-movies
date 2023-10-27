import HomePage from "components/pages/Home";
import Movies from "components/pages/Movies";
import {  Route, Routes } from "react-router-dom";
import { NavApp, NavLinkApp } from "./App.styled";


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
      
    </Routes>
        </>
  );
};
