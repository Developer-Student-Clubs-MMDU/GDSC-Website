import React from 'react'
import image from '../../Assets/images/header_logo.png'
import picture from '../../Assets/images/gdsc_logo.png'

function Logo({width}) {
  {
    if(width.innerWidth>500){
        return(
            <>
            <img src={image} alt="" />
            </>
            )
    }else{
        return(
            <>
            <img src={picture} alt="" style={{width : 100}} />
            </>
        )
    }
  }
}

export default Logo