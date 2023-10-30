import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
padding: 15px;
`

export const NavApp = styled.nav`
border: 1px solid black;
padding: 10px;
padding-left: 30px;
margin-bottom: 10px;
 `

export const NavLinkApp = styled(NavLink)`
color: black;
margin-left:10px;
margin-right: 10px;
list-style: none;
font-size: 24px;
font-weight: 700;


  &.active {
    color: blue;
  }
`