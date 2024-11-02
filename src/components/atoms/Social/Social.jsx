import "./social.css"
import twitter from "../../../assets/twitter.svg";
import facebook from "../../../assets/icons8-facebook-24.svg"
const Social = () => {
  return (
    <>
    <ul>
      <li>
        <img src={twitter} alt="logo de Twitter" />
        <span>Twitter</span>
      </li>
      <li>
        <img src={facebook} alt="logo de Facebook" />
        <span>Facebook</span>
      </li>
    </ul>
    </>
  )
}

export default Social