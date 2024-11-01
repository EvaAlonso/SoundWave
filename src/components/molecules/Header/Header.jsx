import Logo from '../../atoms/Logo/Logo';
import NavBar from '../../atoms/NavBar/NavBar';
import "./Header.css";

function Header() {
  return (
    <header className="header">
    <Logo/>
    <NavBar/>
    </header>
  )
}

export default Header
