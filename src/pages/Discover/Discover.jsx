import Header from "../../components/molecules/Header/Header";
import Footer from '../../components/molecules/Footer/Footer'
import MainDiscover from "../../components/organism/MainDiscover/MainDiscover";
import './discover.css';

const Discover = () => {
  return (
    <div className="page">
      <Header/>
      <MainDiscover/>
      <Footer/>
    </div>
    
  )
}

export default Discover