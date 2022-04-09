import React from 'react'

const TodoItem = ({item})=>{
    console.log(item)
  return (
    <>
        <h1>{item.title}</h1>
    </>
  )
}

export default TodoItem