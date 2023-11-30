import './styles.css'
import titleLogo from '../../../imgs/TitleLogo.jpg'

import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../Context'

function mainTitleSpanish() {
    const context = useContext(ArcadeContext)
    return (
        <main className={`w-[100%] h-[100%]  ${(context.languageSelected == '1' ?  'onScreenStyle' : 'offScreenStyle')}`}>
            <div className='SpanishMenuTitleMainBox'>
                <img className='titleLogo' src={titleLogo} alt="" />
                <div className='menuButtonsBox'>
                    <div className='aboutMyButton'>
                        <h2 onClick={()=> {context.setLanguageSelected('3');}}>Sobre mí</h2>
                    </div>

                    <div className='myExpButton'>
                        <h2 onClick={()=> {context.setLanguageSelected('4');}}>Mi experiencia</h2>
                    </div>

                    <div className='mySkillsButton'>
                        <h2 onClick={()=> {context.setLanguageSelected('5');}}>Mis habilidades</h2>
                    </div>

                    <div className='contactButton'>
                        <h2 onClick={()=> {context.setLanguageSelected('6');}}>Contacto</h2>
                    </div>
                </div>
            </div>

        </main>
         
    )
  }

export default mainTitleSpanish
