import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `Chats(${num})`;
  });
  // useEffect(() => {
  //   console.log("hii")
  // },[]);  //use this [] to load only once when page reload
  return (
    <div className="center_div">
    <p>{num}</p>
    <div class="button2" onClick={()=>{setNum(num+1)}}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      INCR
    </div>
      
    </div>
  )
}

export default UseEffect
