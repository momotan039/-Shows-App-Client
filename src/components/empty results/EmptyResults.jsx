import React from 'react'
import './EmptyResults.css'
function EmptyResults() {
  return (
    <div className="center">
    <div className='empty-reults'>
    <h1 className="shows-title">Not Found Shows</h1>
    <img src="/images/no-data2.gif"/>
    </div>
    </div>

  )
}

export default EmptyResults