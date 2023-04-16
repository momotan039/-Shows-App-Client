import React from 'react'
import './SkeltonShows.css'
function SkeltonShows() {
  return (
    <div className="shows-box">
      {
        Array(3).fill(null).map(()=>{
          return <div className="box">
            <div className="top skelton"></div>
            <div className="bottom">
                <div className="describition skelton"></div>
            </div>
        </div>
          })
      }
    </div>
  )
}

export default SkeltonShows