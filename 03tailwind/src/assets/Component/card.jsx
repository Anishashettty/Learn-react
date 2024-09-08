import React from 'react'

function Card({name,btnText}) {
    
  return (
    <>
    <h1>User name is : {name} </h1>
    <h2>{btnText}</h2>
    </>
  )
}

export default Card
