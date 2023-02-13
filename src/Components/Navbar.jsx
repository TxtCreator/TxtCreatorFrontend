import { Link } from "react-router-dom";

import Logo from "../../public/logo.png";

function Navbar() {
  return (
    <header>
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="logo" width="84px" height="84px" />
        </Link>
      </div>
    </header>
  )
}

export default Navbar