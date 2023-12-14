import './styles.css'
import photo8Bits from '../../../../imgs/Perfil8Bits.jpg'
import dialogue from '../../../../imgs/dialogue.png'
import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'

function AboutMySpanish() {

  const answers = [
    "Hola, todo bien?",
    "Mi nombre es Tomás Cejas",
    "Tengo 22 años",
    "Soy de Argentina, Buenos Aires",
    "Actualmente me encuentro estudiando",
    "Estoy en busqueda de mi primer trabajo",
    "Me gusta programar y jugar",
  ]


  const context = useContext(ArcadeContext)
    return (
      <main className={`w-[100%] h-[100%] ${(context.screenView == '3' ?  'onScreenStyle' : 'offScreenStyle')}`}>

          <div className='aboutMySpanishMain' >

        <div className='tomySection'>
          <img className='photo8Bits rounded-tr rounded-br  border-t-4 border-r-4 border-b-4 border-red-700' src={photo8Bits} alt="" />

          <div className='textBubbleeBox relative '>
            <img className='w-[100%]  top-1 left-0'  src={dialogue} alt="" />
            <p className='dialogueName mt-1'> {
              (context.nameShow == true ? "Tomás" : "???")
            }: </p>
            <p className='dialogueText mt-1'> {answers[context.questionNumber]} </p>
            
            

          </div>
        </div>
          

          <div className='textBox'>

            <p className='textBox_questions' onClick={() => {context.clickQuestion(1); context.nameReveal()}}>1. ¿Cuál es tu nombre? </p>
            <p className='textBox_questions' onClick={() => {context.clickQuestion(2)}}>2. ¿Cual es tu edad? </p> 
            <p className='textBox_questions' onClick={() => {context.clickQuestion(3)}}>3. ¿De dónde sos?</p>
            <p className='textBox_questions' onClick={() => {context.clickQuestion(4)}}>4. ¿A qué te dedicas?</p>
            <p className='textBox_questions' onClick={() => {context.clickQuestion(5)}}>5. ¿Cúal es tu experiencia?  </p>
            <p className='textBox_questions' onClick={() => {context.clickQuestion(6)}}>6. ¿Qué te gusta hacer?  </p> 
                  
          </div>
        </div>
      </main>
         
    )
  }

export default AboutMySpanish

