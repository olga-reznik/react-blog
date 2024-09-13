import React, {useState} from 'react';
import * as classes from './Counter.module.scss'
export const Counter = () => {

    const [count, setCount]  = useState(1);
    const increment = () => {
        setCount(count * Math.random()*1000)
    }
    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    )
}