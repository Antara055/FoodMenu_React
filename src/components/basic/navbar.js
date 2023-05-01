import React from 'react'

const Navbar = ({changeCatagory,menuList}) => {

  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            {menuList.map((curEle)=>{
                return(<button className='btn-group__item' onClick={()=>changeCatagory(curEle)}>{curEle}</button> )
            })}
        
        {/* <button className='btn-group__item'onClick={()=>changeCatagory('lunch')}>Lunch</button>
         <button className='btn-group__item'onClick={()=>setMenuData(Menu)}>All</button> */}
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
