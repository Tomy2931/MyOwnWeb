import './styles.css'
import photo8Bits from '../../../../imgs/Perfil8Bits.jpg'

function AboutMySpanish() {
    return (
       <div className='aboutMySpanishMain' >

        <div className='aboutMySpanishMain_header'>
            <img className='photo8Bits rounded-br-lg border-r-4 border-b-4 border-red-700' src={photo8Bits} alt="" />
            <h1 className='aboutMyTitle'>Sobre mí</h1>
        </div>

            <div className='textBox'>

              <p className='textBox_content'>Mi nombre es Tomas Cejas, soy de la ciudad de </p>
              <p className='textBox_content'>La Plata, Buenos Aires, Argentina. Tengo 22  </p>
              <p className='textBox_content'>años y soy estudiante de Desarrollo de  </p>
              <p className='textBox_content'>Software, también estoy cursando en la  </p>
              <p className='textBox_content'>Plataforma de Platzi, para Desarrollo Web.  </p>
            </div>
       </div>
         
    )
  }

export default AboutMySpanish

