import { Outlet } from 'react-router-dom';
import { NavApp, NavLinkApp,Container } from './Layout.styled';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <Container>
      <NavApp>
        <NavLinkApp to={'/'}> Home</NavLinkApp>
        <NavLinkApp to={'/movies'}> Movie</NavLinkApp>
      </NavApp>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;
