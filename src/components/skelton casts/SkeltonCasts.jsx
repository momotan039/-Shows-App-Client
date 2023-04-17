import React from 'react'
import './SkeltonCasts.css'
function SkeltonCasts() {
  return (
    <div className="casts-box">
      {
        Array(20).fill(null).map((v,i)=>{
          return <div key={i} className="box">
            <div className="left skelton"></div>
            <div className="right">
                <div className="cast-title skelton"></div>
                <div className="cast-job skelton"></div>
            </div>
        </div>
          })
      }
    </div>
  )
}

export default SkeltonCasts