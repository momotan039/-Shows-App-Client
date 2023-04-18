import React from 'react'
import { useSelector } from 'react-redux'
import './Loader.css'
function Loader() {
    const {isPlaying}=useSelector(state=>state.loader)
    if(isPlaying)
  return (
    // <div className="container-loader">
    //     <div className='loader'>Loading...</div>
    // </div>
    <div className="container-loader">
      <img src="/images/loader.gif"/>
    </div>
  )
}

export default Loader