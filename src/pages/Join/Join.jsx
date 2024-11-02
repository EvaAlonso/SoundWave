import Header from "../../components/molecules/Header/Header";
import Circle from "../../components/atoms/Circle/Circle";
import Footer from "../../components/molecules/Footer/Footer";
import "./Join.css";
import JoinSection from "../../components/molecules/JoinSection/JoinSection";

const Join = () => {
  
  return (
    <>
    <div className="join-container">
    <Header/>
    <JoinSection/>
    <Footer />
    </div>
    </>
  )
  
}

export default Join