import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <div>Root</div>
    <Outlet/>
    </>    
  )
}

export default Root