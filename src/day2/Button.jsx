import { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);
    const handleInc = () => {
        setCount(count + 1);
    }
    const handleDec = () => {
        setCount(count - 1);
    }
    const handleDouble = () => {
        setCount(count*2);
    }
    return(
        <>
        <h1 style={{color:"white"}}>{count}</h1>
            <button onClick={()=>handleInc()}>Increase</button>
            <button onClick={()=>handleDec()}>Decrease</button>
            <button onClick={()=>handleDouble()}>Double</button>
        </>
    );
}
export default Button;