import './styles.css'
import tailwindIcon from '../../../../imgs/tailwindIcon.png'
import reactIcon from '../../../../imgs/reactIcon.png'
import pythonIcon from '../../../../imgs/pythonIcon.png'
import cssIcon from '../../../../imgs/cssIcon2.png'
import htmlIcon from '../../../../imgs/htmlIcon2.png'
import JSIcon from '../../../../imgs/JSIcon.png'
import coin from '../../../../imgs/coin.png'

function mySkills() {
    return (
            <div className='mySkillsMain'>
                <div className='inventoryGeneralDetail absolute top-1 right-20 flex align-baseline'>
                    <p className='text-red-200'>0</p>
                    <img className='w-10' src={coin} alt="" />
                </div>
        
                <div className='mySkillsBox'>
        
                    <h2 className='inventoryTitle'>Inventario</h2>

                    <div className='inventorySpaceContainer'>
                        <div className='inventorySpace'>
                            <img className='w-12' src={htmlIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={cssIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={JSIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={reactIcon} alt="" />  
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={tailwindIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={pythonIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={tailwindIcon} alt="" />    
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={tailwindIcon} alt="" />    
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={tailwindIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={tailwindIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={tailwindIcon} alt="" />
                        </div>
                        <div className='inventorySpace'>
                            <img className='w-12' src={tailwindIcon} alt="" />
                        </div>
                    </div>

                </div>
            </div>
         
    )
  }

export default mySkills
