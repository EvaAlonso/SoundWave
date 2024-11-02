import IconSection from '../../molecules/IconsSection/IconSection';
import covers from '../../../assets/covers.jpg';
import './mainDiscover.css';

const MainDiscover = () => {
  return (
    <section className='main-section'>
      <section className='textsandicons'>
      <h2 className='h2-discover'>Discover new music</h2>
      <IconSection/>
      <p className='p-discover'>By joining you can benefit by listening to the latest albums realeased.</p>
      </section>
      <img src={covers} alt="albums covers" className='covers'/>
    </section>
  )
}

export default MainDiscover