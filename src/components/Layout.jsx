import { Outlet } from "react-router";
import HeaderMenu from "./HeaderMenu";
import FooterMenu from "./FooterMenu";

const Layout = () => {
  return (
    <>
      <HeaderMenu />
      <Outlet />
      <FooterMenu />
    </>
  );
};
export default Layout;
