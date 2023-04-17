import React from 'react'
import './SkeltonShows.css'
function SkeltonShows({num}) {
  return (
    <div className="shows-box">
      {
        Array(num?num:20).fill(null).map((v,i)=>{
          return <div key={i} className="box">
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