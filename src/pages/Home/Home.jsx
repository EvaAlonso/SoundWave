import Circle from '../../components/atoms/Circle/Circle'
import Header from '../../components/molecules/Header/Header'
import ImgSection from '../../components/molecules/ImgSection/ImgSection'
import "./Home.css"

const Home = () => {
  return (
    <main className='container'>
      <Header className="header"/>
      <ImgSection/>
      <Circle />
    </main>
  )
}

export default Home