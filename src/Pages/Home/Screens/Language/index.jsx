import './styles.css'
import pointHand from '../../imgs/pointHand.png'

function LanguageScreen() {
    return (
        <div className='LanguageBox'>
            <h1 className='LanguageTitle'>Please, select your language: </h1>
            <h2 className='LanguageOption1'>Spanish</h2>
            <h2 className='LanguageOption2'>English</h2>
            <img className='pointHand1' src={pointHand} alt="" />
            <img className='pointHand2' src={pointHand} alt="" />
        </div>
         
    )
  }

export default LanguageScreen
