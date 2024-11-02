import Button from "../../atoms/Button/Button"
import Explanation from "../../atoms/Explanation/Explanation"
import img from "../../../assets/landing-page-girl.png"
import "../../atoms/Button/JoinButton.css"
import "./ImgSection.css"


function ImgSection() {
  return (
    <section>
      <img className="img-girl" src={img} alt="Imagen perfil de una chica" />
      <div className="section-text">
      
      <Explanation/>
      <Button title="Join Now"/>
     
      </div>
      
    </section>
  )
}

export default ImgSection