import './styles.css'
import tailwindIcon from '../../../../imgs/tailwindIcon.png'
import reactIcon from '../../../../imgs/reactIcon.png'
import pythonIcon from '../../../../imgs/pythonIcon.png'
import cssIcon from '../../../../imgs/cssIcon2.png'
import htmlIcon from '../../../../imgs/htmlIcon2.png'
import JSIcon from '../../../../imgs/JSIcon.png'
import coin from '../../../../imgs/coin.png'
import apple from '../../../../imgs/apple.png'
import potion from '../../../../imgs/potion.png'
import sword from '../../../../imgs/sword.png'
import cheese from '../../../../imgs/cheese.png'
import control from '../../../../imgs/control.png'
import dice from '../../../../imgs/dice.png'

function mySkills() {
    return (
            <div className='mySkillsMain'>
                <div className='inventoryGeneralDetail absolute top-0 right-5 flex '>
                    <p className='inventoryCoinCount text-white font-bold text-xl'>0</p>
                    <img className='w-10' src={coin} alt="" />
                </div>
        
                <div className='mySkillsBox'>
        
                    <h2 className='inventoryTitle'>Inventario</h2>

                    <div className='inventorySpaceContainer'>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-12' src={htmlIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-12' src={cssIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-12' src={JSIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-12' src={reactIcon} alt="" />  
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-12' src={tailwindIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-12' src={pythonIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-10' src={potion} alt="" />    
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-15' src={apple} alt="" />    
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-15' src={sword} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-15' src={cheese} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-12' src={dice} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='inventoryIcons w-15' src={control} alt="" />
                        </div>
                    </div>

                </div>
            </div>
         
    )
  }

export default mySkills
