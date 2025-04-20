import { NavLink } from "react-router";
import "../styles/HeaderMenu.css";

const FooterMenu = () => {
  return (
    <ul className="nav-list">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contacts"}>Contacts</NavLink>
      </li>
      <li>
        <NavLink to={"/products"} end>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to={"/products/product"}>Product</NavLink>
      </li>
    </ul>
  );
};
export default FooterMenu;
