import "./social.css"
import twitter from "../../../assets/twitter.svg"
const Social = () => {
  return (
    <>
    <ul>
      <li>
        <img src={twitter} alt="logo de Twitter" />
        <span>Twitter</span>
      </li>
      <li>
        <img src={twitter} alt="logo de Facebook" />
        <span>Facebook</span>
      </li>
    </ul>
    </>
  )
}

export default Social