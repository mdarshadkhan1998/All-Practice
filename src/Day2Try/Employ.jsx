import React from 'react'
import Card from './Card'

const data = {
    name:"Arshad Khan",
    qualification:"UG",
    organization:"MASAI",
    image:"https://avatars.githubusercontent.com/u/98782705?v=4"
}
function Employ() {
  return (
    <>
    <Card {...data}/>
    </>
  )
}

export default Employ