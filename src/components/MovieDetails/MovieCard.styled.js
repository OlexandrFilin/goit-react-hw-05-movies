import styled from "styled-components"
import { Link } from "react-router-dom";

export const ContainerAboutMovie = styled.div`
display:flex; 
column-gap: 26px;
 `
 export const GoBackStyl = styled(Link)`
 display: flex;
            align-items: center; /* Вирівнювання в центрі по вертикалі */
 margin-bottom: 15px;
 margin-left: 15px;
 font-size: 20px;
 width: 100px;
 border: 1px solid black;
 background-color: beige;
`

export const ListNavAddInfo = styled.ul`
padding-left: 102px;
padding-top: 10px;
border: 1px solid black;
padding-bottom: 10px;
font-size:20px;
font-weight:700;
background-color: beige;
`