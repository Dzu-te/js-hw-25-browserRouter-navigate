import { Link } from "react-router";

const HeaderMenu = () => {
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/contacts"}>Contacts</Link>
      </li>
    </ul>
  );
};
export default HeaderMenu;
