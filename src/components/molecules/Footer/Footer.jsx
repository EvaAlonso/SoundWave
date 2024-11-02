import Contact from "../../atoms/Contact/Contact"
import Social from "../../atoms/Social/Social"
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="inner-footer">
    <Contact/>
    <Social/>
    </div>
    </footer>
  )
}

export default Footer