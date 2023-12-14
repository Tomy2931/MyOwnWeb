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

function MySkillsEnglish() {
    const context = useContext(ArcadeContext)
    const imgList = [htmlIcon,cssIcon,JSIcon,reactIcon,tailwindIcon,pythonIcon,potion,apple,sword,cheese,dice,control]
    const itemsDetails = [
    {icon:htmlIcon, name: "HTML", desc: "Markup language for creating web pages.", type: "Language"  },
    {icon:cssIcon, name: "CSS", desc: "Programming language used to define and control the presentation and design of web pages.", type: "Language"  },
    {icon:JSIcon, name: "JavaScript", desc: "Programming language used in web development that allows adding interactivity and functionality to websites.", type: "Language"  },
    {icon:reactIcon, name: "React.JS", desc: "JavaScript library, used to build interactive user interfaces in web applications.", type: "Library"  },
    {icon:tailwindIcon, name: "Tailwdind", desc: "It allows developers and designers to apply styles to websites in an agile and optimized way.", type: "Framework"  },
    {icon:pythonIcon, name: "Python", desc: "Programming language used in various applications, from web development to data analysis and task automation. ", type: "Language"  },
    {icon:potion, name: "Potion", desc: "A strange potion, I don't know what it does...", type: "Consumable"  },
    {icon:apple, name: "Apple", desc: "A simple apple.", type: "Consumable"  },
    {icon:sword, name: "Sword", desc: "A wooden sword.", type: "Weapon"  },
    {icon:cheese, name: "Cheese", desc: "A delicious cheese, I don't know how it ended up in my backpack.", type: "Consumable"  },
    {icon:dice, name: "Dice", desc: "A nice dice 👍🏻", type: "Object"  },
    {icon:control, name: "???", desc: "I have no idea what this is.", type: "Rare"  },

]
    const i = context.selectedItemDetail
    const src = imgList[i]
    const detailValue = itemsDetails[i].icon
   
    return (
            <main className={`w-[100%] h-[100%]  ${(context.screenView == '9' ?  'onScreenStyle' : 'offScreenStyle')}  ${(context.isItemDetailOpen == true ?  'offScreenStyle' : 'onScreenStyle')}} `}>
                 <section className={`w-[100%] h-[100%]  ${(context.isItemDetailOpen == true ?  'offScreenStyle' : 'onScreenStyle')}`}>
                    <div className='mySkillsMain' >
                        <div className='myCoinsBox absolute top-0 right-5 flex items-center '>
                            <p className='inventoryCoinCount text-white font-bold text-xl'>{context.coinCount}</p>
                            <img className='w-10' src={coin} alt="" />
                        </div>
                
                        <div className='mySkillsBox'>
                
                            <h2 className='inventoryTitle'>Inventory</h2>

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

                                <img  className='itemDetailImage border-4 border-red-200 rounded-lg bg-slate-950 ml-1 p-2 ' src={detailValue} alt="Imagen" />
                                <img  className='closeIcon absolute right-0 top-0 cursor-pointer' onClick={context.clickClose} src={cruzIcon} alt="icono de cerrar" />

                                <div className='textInfoBox ml-2'>

                                    <h1 className='text-[2rem] underline'>{itemsDetails[i].name}</h1>

                                    <div className='w-[100%] h-[30%]  bg-red-400 rounded-md'>
                                        <h2 className='text-left ml-1 text-[0.9rem] '> {itemsDetails[i].desc} </h2>

                                    </div>

                                    <div className='typeItem flex  bg-green-400 mt-1 rounded-lg text-[0.9rem] '>

                                        <h2 className='ml-1'  >Type:</h2> 
                                        <h2 className='ml-1 mr-2 font-semibold'>{itemsDetails[i].type}</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </section>
            </main>
         
    )
  }

export default MySkillsEnglish
