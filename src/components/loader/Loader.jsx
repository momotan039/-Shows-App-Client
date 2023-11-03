import React from 'react'
import { useSelector } from 'react-redux'
import './Loader.css'
function Loader() {
    const {isPlaying,isFirstTime}=useSelector(state=>state.loader)
    if(isPlaying)
  return (
    // <div className="container-loader">
    //     <div className='loader'>Loading...</div>
    // </div>
    <div className="container-loader">
    {isFirstTime&&<h1>😉 We Are In Free Server , So Be Patient 😉</h1>}
      <img src="/images/loader.gif"/>
    </div>
  )
}

export default Loader