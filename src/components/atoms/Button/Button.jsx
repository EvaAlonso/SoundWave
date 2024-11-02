
import "./JoinButton.css";


function Button({title, withBtn}) {

  return (
    <button with={withBtn} className="btn-cta" >{title}</button>
  )
}

export default Button