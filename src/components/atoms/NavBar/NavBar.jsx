import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
        <Link className="link" to="/discover">Discover</Link>
        </li>
        <li>
        <Link className="link" to="/join">Join <span className="mobile">in</span></Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar