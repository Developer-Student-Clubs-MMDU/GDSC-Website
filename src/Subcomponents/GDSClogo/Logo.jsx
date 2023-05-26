import React from 'react'
import image from '../../Assets/images/header_logo.png'
import picture from '../../Assets/images/gdsc_logo.png'

function Logo({width}) {
  {
    if(width.innerWidth>960){
        return(
            <>
            <img src={image} alt=""  />
            <style jsx>{`
              img{
                width: 30vw;
              }
              @media
            `}</style>
            </>
            )
    }else{
        return(
            <>
            <img src={picture} alt="" style={{width : 80}} />
            </>
        )
    }
  }
}

export default Logo