import './iconDisc.css'

const IconDisc = ({src, text, alt}) => {
  return (
    <>
    <div className='textandicon'>
    <img src={src} alt={alt} className="icon"/>
    <p className="text-icon">{text}</p>
    </div>
    </>
  )
}

export default IconDisc