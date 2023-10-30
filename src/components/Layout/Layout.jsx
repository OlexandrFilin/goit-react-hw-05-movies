import { Outlet } from "react-router-dom";
import { NavApp, NavLinkApp } from "./Layout.styled";
import { Suspense } from "react";
const Layout =()=>{
return <div>
     <NavApp>
        <NavLinkApp to={"/"}> Home</NavLinkApp>
        <NavLinkApp to={"/movies"}> Movie</NavLinkApp>
    </NavApp>   
<Suspense>
    <Outlet/>
</Suspense>    
</div>
}
export default Layout;