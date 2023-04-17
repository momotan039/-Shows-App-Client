import React from 'react'
import './SkeltonShows.css'
function SkeltonShows({num}) {
  return (
    <div className="shows-box">
      {
        Array(num?num:3).fill(null).map(()=>{
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