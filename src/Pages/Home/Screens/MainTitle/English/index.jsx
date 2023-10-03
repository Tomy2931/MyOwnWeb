import './styles.css'
import pointHand from '../../imgs/pointHand.png'

function LanguageScreen() {
    return (
        <div className='LanguageBox'>
            <h1 className='LanguageTitle'>Please, select a language: </h1>

            <div className='LanguageOption1'>

                <img className='pointHand1' src={pointHand} alt="" />
                <h2 >Spanish</h2>

            </div>

            <div className='LanguageOption2'>

                <img className='pointHand2' src={pointHand} alt="" />
                <h2>English</h2>

            </div>

        </div>
         
    )
  }

export default LanguageScreen
