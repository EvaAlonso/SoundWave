import Circle from "../../atoms/Circle/Circle";
import JoinText from "../../atoms/JoinText/JoinText";
import Form from "../Form/Form";
import './joinSection.css'

const JoinSection = () => {
  return (
    <>
    <div className="form-join">
    <Circle className="circle1"/>
    <Circle className="circle2"/>
    <JoinText/>
    <Form/>
    </div>
    </>
  )
}

export default JoinSection