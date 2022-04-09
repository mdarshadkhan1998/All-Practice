// import React from 'react'
// import { useState } from 'react'
// import {nanoid} from "nanoid"
// import TodoItem from './TodoItem';

// const TodoList = () =>{
//     const [task, setTask] = useState("");
//     const [todo, setTodo] = useState([]);

//     const handleChange = (e) =>{
//         console.log(e.target);
//         setTask(e.target.value);
//     };
//     const handleClick = ()=>{
//         const taskObj = {
//             title:task,
//             status:false,
//             id:nanoid(),
//         };
//         setTodo([taskObj,...todo]);
//     };
// }

// function TodoList(){
//   return (
//     <>
//         <input type="text" placeholder='Enter Task' value={task} onChange={handleChange}/>
//         <button onClick={handleClick}>Add Todo</button>
//         {todo.map(item=>{
//             return <TodoItem key = {item.id} {...item}/>
//         })}
//     </>
//   )
// }

// export default TodoList;


import React from "react";
import { useState } from "react";

const TodoList=()=>{

        const [task, setTask]=useState("");
        const [todo, setTodo]=useState([]);
    const handleChange = (e)=>{
        console.log(e.target.value)
        setTask(e.target.value)
    }


    const handleClick = ()=>{
        console.log(task)
        // setTask(todo,...task)
    }
    return (
            <>
                <input placeholder="Enter Data" value={task} onChange={handleChange} />
                <button onClick={handleClick}>Add Todo</button>
                
            </>
            
    );
};
export default TodoList;