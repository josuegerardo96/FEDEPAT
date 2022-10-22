import React from 'react'
import "./imghelper.css"
function imghelper({base64String,categoria}) {
  return (
    <div className='center_img' >
        <h2>{categoria}</h2>
        <img src={`data:image/png;base64,${base64String}`} alt="imagen" width="1000"/>
    </div>
  )
}

export default imghelper