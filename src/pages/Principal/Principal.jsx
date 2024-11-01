import Circle from '../../components/atoms/Circle/Circle'
import Footer from '../../components/molecules/Footer/Footer'
import Header from '../../components/molecules/Header/Header'
import ImgSection from '../../components/molecules/ImgSection/ImgSection'
import "./principal.css"

const Principal = () => {
  return (
    <main className='container'>
      <Header className="header"/>
      <ImgSection/>
      <Circle />
    </main>
  )
}

export default Principal