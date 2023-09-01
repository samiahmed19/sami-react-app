import React, { useState } from 'react';
import Child from './Child';
const Parent = () => {
    const [count, setCount] = useState(0);

    const incrementcount = () => {
        setCount(count + 1);
        if (count === 10) {
            setCount(count + 1)
        }
        else if (count === 10 && count === 20) {
            setCount(count + 2)
        }
        else if (count === 10 && count === 30) {
            setCount(count + 3)
        }
        else if (count === 30 && count === 40) {
            setCount(count + 4)
        }
        else {
            setCount(count + 5)
        }
    }
    const decrementcount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        // setCount(0);
    }
    return (
        <div>
            <h3>parent component</h3>
            <p>{count}</p>
            <button onClick={incrementcount}>increment</button>
            <button onClick={decrementcount}>decrement</button>
            {/* <p>sum: {incrementcount.sum}</p> */}
            <Child count={count} />
        </div>
    )
}

export default Parent