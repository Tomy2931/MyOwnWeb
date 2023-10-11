import './styles.css'
import PhoneBox from './phone'
import BookPhone from './bookPhone'
import phoneBook from '../../../../imgs/phoneBook.png'


function contact() {
    return (
        <div className='contactMain'>
          <img className='w-12 absolute top-5 left-5 phoneBook' src={phoneBook} alt="" />

          {/* Libreta con numeros */}
          <BookPhone/>  

          {/* Telefono para marcar */}
          <PhoneBox/>

        </div>
         
    )
  }

export default contact
