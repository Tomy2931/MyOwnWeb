import './styles.css'
import PhoneBox from './phone'
import BookPhone from './bookPhone'
import phoneBook from '../../../../imgs/phoneBook.png'
import phoneGuy from '../../../../imgs/phoneGuy.jfif'
import React, { useContext } from 'react'
import textSound from '../../../../Mp3/TextSound.mp3'
import { ArcadeContext } from '../../../../../../Context'


function letterListRandom() {
  const letterList = ["You are going to win the lottery"
  ,"You have a lost brother", "You're going to have good news tomorrow"
  ,"You are going to lose half of your savings", "I am behind you","Messi is going to be president of Argentina",
  "Tomorrow you will receive bad news","There's 10 dollars in your pocket",
  "You're going to have new friends the next year","Someone betrays you",
  "You are going to have a new pet", "A new season of your favorite series will be released", 
  "The new season of your favorite series will never come out","You're going to lose a finger next month"]
  let num = Math.floor(Math.random() * letterList.length)
  const randomletter = letterList[num]
  return randomletter;
}
let infoLetter = letterListRandom()
const phoneNumbersInfo = [
  {info:"+54 221 6267595",href:"" },
  {info:"@Tomy_cejas",href:"https://www.instagram.com/tomy_cejas/" },
  {info:"https://www.linkedin.com/in/tomas-cejas-033439251/",href:"https://www.linkedin.com/in/tomas-cejas-033439251/" },
  {info:"https://github.com/Tomy2931",href:"https://github.com/Tomy2931" },
  {info:"tomas.cejas@hotmail.com",href:"" },
  {info:"Stop calling, the Pizza Shop has been closed 2 years ago!!! >:(",href:"" },
  {info:infoLetter,href:"" },
  {info:"No number matches",href:"" },
  {info:"Dont Click Here",href:"https://www.youtube.com/shorts/HmaMkZbaUWI?feature=share" },

  // {info:"tomas.cejas@hotmail.com",href:"http://localhost:5173/MyOwnWeb/#/email" },
]


function ContactEnglish() {
  const context = useContext(ArcadeContext)
    return (
        <main className={`w-[100%] h-[100%]  ${(context.screenView == '10' ?  'onScreenStyle' : 'offScreenStyle')}`}>
          <div className='contactMain'>
            <img className='w-12 absolute top-5 left-5 phoneBook cursor-pointer' onClick={context.openBook} src={phoneBook} alt="" />

            {/* Libreta con numeros */}
            <BookPhone/>  

            {/* Telefono para marcar */}
            <PhoneBox 
            />

            <div className={`w-[100%] h-[100%] absolute ${(context.bubbleTextPhone == true ?  'onScreenStyle' : 'offScreenStyle')}`}>

              <div className='w-[100%] h-[100%] absolute flex justify-center items-end '>
                  <div className='bubbleTextPhone w-[80%] h-[33%] mb-5 rounded-lg relative' >
                      <h1 className='Xclose text-white ml-2 absolute text-2xl top-1 right-4' onClick={context.closeBubbleTextPhone}>X</h1>
                      <img className='phoneGuyIcon' src={phoneGuy} alt="imagenPerfil" />
                        <audio src={textSound} ></audio>
                        <h1 className='text-white ml-2 absolute text-2xl top-4 left-[28%]'>???:</h1>
                            
                              <a className='phoneGuyText text-white ml-1 text-xs' target="_blank"
                              href={ (context.numberInfo == 0 || context.numberInfo == 4 || context.numberInfo == 5 )  ? null  : phoneNumbersInfo[context.numberInfo].href }>
                                {phoneNumbersInfo[context.numberInfo].info}  </a>
                        </div>
                      <div>

                      </div>
                      
                </div>
            </div>


            </div>
     
        </main>
         
    )
  }

export default ContactEnglish
