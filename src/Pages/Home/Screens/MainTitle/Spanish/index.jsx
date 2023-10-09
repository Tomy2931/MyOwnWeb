import './styles.css'
import titleLogo from '../../../imgs/TitleLogo.jpg'
function mySkills() {
    return (
        <div className='SpanishMenuTitleMainBox'>
            <img className='titleLogo' src={titleLogo} alt="" />
            <div className='menuButtonsBox'>
                <div className='aboutMyButton'>
                    <h2>Sobre mí</h2>
                </div>

                <div className='myExpButton'>
                    <h2>Mi experiencia</h2>
                </div>

                <div className='mySkillsButton'>
                    <h2>Mis habilidades</h2>
                </div>

                <div className='contactButton'>
                    <h2>Contacto</h2>
                </div>
            </div>
        </div>
         
    )
  }

export default mySkills
