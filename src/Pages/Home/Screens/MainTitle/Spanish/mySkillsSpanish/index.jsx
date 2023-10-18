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
import cruzIcon from '../../../../imgs/cruzIcon.png'

import React, { useContext } from 'react'
import { ArcadeContext } from '../../../../../../Context'

function mySkills() {
    const context = useContext(ArcadeContext)
    const imgList = [htmlIcon,cssIcon,JSIcon,reactIcon,tailwindIcon,pythonIcon,potion,apple,sword,cheese,dice,control]
    const i = context.selectedItemDetail
    const src = imgList[i]
   
    return (
            <main className={`w-[100%] h-[100%]  ${(context.languageSelected == '5' ?  'onScreenStyle' : 'offScreenStyle')}  ${(context.isItemDetailOpen == true ?  'offScreenStyle' : 'onScreenStyle')}} `}>
                 <section className={`w-[100%] h-[100%]  ${(context.isItemDetailOpen == true ?  'offScreenStyle' : 'onScreenStyle')}`}>
                    <div className='mySkillsMain' >
                        <div className='myCoinsBox absolute top-0 right-5 flex items-center '>
                            <p className='inventoryCoinCount text-white font-bold text-xl'>{context.coinCount}</p>
                            <img className='w-10' src={coin} alt="" />
                        </div>
                
                        <div className='mySkillsBox'>
                
                            <h2 className='inventoryTitle'>Inventario</h2>

                            <div className='inventorySpaceContainer'>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(0)   
                                }}>
                                    <img className='inventoryIcons w-12' src={htmlIcon} alt="" />
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(1)    
                                }}>
                                    <img className='inventoryIcons w-12' src={cssIcon} alt="" />
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(2)    
                                }}>
                                    <img className='inventoryIcons w-12' src={JSIcon} alt="" />
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(3)    
                                }}>
                                    <img className='inventoryIcons w-12' src={reactIcon} alt="" />  
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(4)    
                                }}>
                                    <img className='inventoryIcons w-12' src={tailwindIcon} alt="" />
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(5)    
                                }}>
                                    <img className='inventoryIcons w-12' src={pythonIcon} alt="" />
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(6)    
                                }}>
                                    <img className='inventoryIcons w-10' src={potion} alt="" />    
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(7)    
                                }}>
                                    <img className='inventoryIcons w-15' src={apple} alt="" />    
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(8)    
                                }}>
                                    <img className='inventoryIcons w-15' src={sword} alt="" />
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(9)    
                                }}>
                                    <img className='inventoryIcons w-15' src={cheese} alt="" />
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(10)    
                                }}>
                                    <img className='inventoryIcons w-12' src={dice} alt="" />
                                </div>
                                <div className='inventorySpace' 
                                onClick={()=> {context.clickItem()
                                context.setSelectedItemDetail(11)    
                                }}>
                                    <img className='inventoryIcons w-15' src={control} alt="" />
                                </div>
                            </div>

                            </div>
                    </div>

                 </section>

                    <section className={`w-[100%] h-[100%]  ${(context.isItemDetailOpen == true ?  'onScreenStyle' : 'offScreenStyle')}`}>
                        <div className='itemDetailBox z-10'>

                            <div className='itemDetail'>

                                <img  className='w-[40%] h-[75%] border-4 border-red-200 rounded-lg bg-slate-950 ml-1 ' src={src} alt="Imagen" />
                                <img  className='closeIcon w-[15%] h-[25%] absolute right-0 top-0 cursor-pointer' onClick={context.clickClose} src={cruzIcon} alt="icono de cerrar" />

                                <div className='textInfoBox ml-2'>

                                    <h1 className='text-[2.5rem]'>Nombre</h1>

                                    <div className='w-[100%] h-[30%] bg-red-400 rounded-md'>
                                        <h2 className='text-left ml-1'>Esto es una espada xd lol omg</h2>

                                    </div>

                                    <div className='typeItem flex bg-green-400 mt-1 rounded-lg'>

                                        <h2>Tipo:</h2> 
                                        <h2>Comida</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </section>
            </main>
         
    )
  }

export default mySkills
