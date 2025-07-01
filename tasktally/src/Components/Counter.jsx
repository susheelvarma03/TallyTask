import {useState} from "react";

function Counter(){
    const [count, setCount]= useState(0);

    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);

    return(
        <div className="counter">
            <h2 className="sub">Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>+ Increment</button>
            <button onClick={decrement}>- Decrement</button>
        </div>
    );

}
export default Counter;