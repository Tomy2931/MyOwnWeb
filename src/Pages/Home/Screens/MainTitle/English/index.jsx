import '../Spanish/styles.css'
import titleLogo from '../../../imgs/TitleLogo.jpg'
function EnglishMenuTitle() {
    return (
        <div className='SpanishMenuTitleMainBox'>
            <img className='titleLogo' src={titleLogo} alt="" />
            <div className='menuButtonsBox'>
                <div className='aboutMyButton'>
                    <h2>About my</h2>
                </div>

                <div className='myExpButton'>
                    <h2>My experience</h2>
                </div>

                <div className='mySkillsButton'>
                    <h2>My skills</h2>
                </div>

                <div className='contactButton'>
                    <h2>Contact</h2>
                </div>
            </div>
        </div>
         
    )
  }

export default EnglishMenuTitle

