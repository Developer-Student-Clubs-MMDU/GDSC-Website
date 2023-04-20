import React from 'react'

export default function Lead({name,color}) {
  if(name == "Lead"){
    return(
      <>
      <h1>{name}</h1>
      <div className="A-3 red">
                <div className="A-3-1" />
                <div className="A-3-2">
                    <h2>Levi Ackermann</h2>
                     <p>Scout Captain</p>
                </div>
            </div>
      </>
    )
  }else{
    return(
     <>
     <h1>{name}</h1>
      <div className="A-3 green">
                <div className="A-3-1" />
                <div className="A-3-2">
                    <h2>Levi Ackermann</h2>
                     <p>Scout Captain</p>
                     {/* <ul>
                        <li><BsGithub/></li>
                        <li></li>
                        <li></li>
                     </ul> */}
                </div>
            </div>
     </>
    )
  }
}
