import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// import {LinkGoBackStyle} from './GoBack.styled'

const GoBack = ()=>{
const location =  useLocation();
    const linkLocation = useRef(location.state?.from ?? '/movies');
   return  <>
   <Link to={linkLocation.current}>Go back</Link>
  
    </>
}
export default GoBack;