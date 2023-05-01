import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './menuCard.js'
import Navbar from './navbar'

const uniqueCatagory=[...new Set(Menu.map((curEle)=>{
  return curEle.category;
})), "All"
]
console.log(uniqueCatagory);

const Resturant=()=> {
    const [menuData,setMenuData]=useState(Menu);
    const [menuList,setMenuList]=useState(uniqueCatagory);
    
    const changeCatagory=(catagory)=>{
      if(catagory==='All'){
        setMenuData(Menu);
        return;
      }
      const updateCtagory=Menu.filter((curEle)=>{
        return curEle.category===catagory;
      })
      setMenuData(updateCtagory);
    }
  return (
    <>
    <Navbar changeCatagory={changeCatagory} menuList={menuList}></Navbar>
   <MenuCard menuData={menuData}/>
   </>
  )
}

export default Resturant
