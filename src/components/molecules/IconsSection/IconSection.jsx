
import IconDisc from '../../atoms/IconDisc/IconDisc';
import micro from '../../../assets/microphone.svg';
import album from '../../../assets/albums.svg';
import more from '../../../assets/more.svg';
import './iconsection.css'

function IconSection(){
 
  return (
  
    <section className='iconsSection'>
    <IconDisc src={micro} alt='microphone' text='Charts' />
    <IconDisc src={album} alt='albums' text='Albums' />
    <IconDisc src={more} alt='more' text='More' />
    </section>
    
  )
}

export default IconSection