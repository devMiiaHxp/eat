import { Link } from "react-router-dom";
import logo from "../../../src/logo.jpg";
import "./NavBar.scss";
function NavBar() {
  return (
    <>
      <div className="container">
        <Link to="/">
          <img src={logo} width={90} alt="" />
          <h1>Feedall</h1>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
