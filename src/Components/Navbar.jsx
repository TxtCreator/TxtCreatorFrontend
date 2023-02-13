import { Link } from "react-router-dom";

import Logo from "../../public/logo22.png";

function Navbar() {
  return (
    <header>
            <div>
              <Link to={"/"}>
                <img src={Logo} alt="logo" width="82px" />
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
    </header>
  )
}

export default Navbar