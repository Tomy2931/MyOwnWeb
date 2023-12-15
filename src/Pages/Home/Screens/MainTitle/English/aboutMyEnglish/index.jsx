import './styles.css'
import photo8Bits from '../../../../imgs/Perfil8Bits.jpg'
import dialogue from '../../../../imgs/dialogue.png'
import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'

function AboutMeEnglish() {
  
  const answers = [
    "Hey, how's it going?",
    "My name is Tomás Cejas",
    "I'm 22",
    "I'm from Argentina, Buenos Aires",
    "I'm currently studying",
    "I'm looking for my first job",
    "I like programing and playing videogames",
  ]


  const context = useContext(ArcadeContext)
    return (
      <main className={`w-[100%] h-[100%] ${(context.screenView == '7' ?  'onScreenStyle' : 'offScreenStyle')}`}>

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

            <p className='textBox_questions' onClick={() => {context.clickQuestion(1); context.nameReveal()}}>1. What is your name? </p>
            <p className='textBox_questions' onClick={() => {context.clickQuestion(2)}}>2. How old are you? </p> 
            <p className='textBox_questions' onClick={() => {context.clickQuestion(3)}}>3. Where are you from?</p>
            <p className='textBox_questions' onClick={() => {context.clickQuestion(4)}}>4. What do you do?</p>
            <p className='textBox_questions' onClick={() => {context.clickQuestion(5)}}>5. What is your experience?</p>
            <p className='textBox_questions' onClick={() => {context.clickQuestion(6)}}>6. What do you like to do?  </p> 
                  
          </div>
        </div>
      </main>
         
    )
  }

export default AboutMeEnglish

