import { Link } from "react-router-dom";

import Logo from "../assets/logo22.png";

function Navbar() {
  return (
    <header>
            <div>
              <Link to={"/"}>
                <img src={Logo} alt="logo" width="56px" />
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to={"/"}>Strona główna</Link>
                </li>
                <li>
                  <Link to={"/about"}>O Nas</Link>
                </li>
                <li>
                  <Link to={"/creator/1-8"}>Stwórz TxT</Link>
                </li>
              </ul>
            </nav>
    </header>
  )
}

export default Navbar;