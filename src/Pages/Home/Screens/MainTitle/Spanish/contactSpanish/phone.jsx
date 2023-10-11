import './styles.css'


function phoneBox() {
    return (
           <div className='phoneBox'>
                <div className='phoneHandle'></div>
                <div className='numberScreen'>
                    <p className='numberScreenCont'>5125</p>
                </div>
                <div className='phoneButtonBox'>
                  <div className='buttonNumber'>1</div>
                  <div className='buttonNumber'>2</div>
                  <div className='buttonNumber'>3</div>
                  <div className='buttonNumber'>4</div>
                  <div className='buttonNumber'>5</div>
                  <div className='buttonNumber'>6</div>
                  <div className='buttonNumber'>7</div>
                  <div className='buttonNumber'>8</div>
                  <div className='buttonNumber'>9</div>
                  <div className='buttonNumber'>*</div>
                  <div className='buttonNumber'>0</div>
                  <div className='buttonNumber'>#</div>
                 
                </div>
           </div>
         
    )
  }

export default phoneBox