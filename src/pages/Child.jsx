 import React from 'react'
import Grandparent from './Grandparent'
const Child = (props) => {
    return (
        <div>
            <h3> Child component</h3>
            {/* <p>{count}</p>
            <button onClick={onIncrement}>Increment </button> */}
            {props.count}
            <Grandparent count={props.count}/>
        </div>
    )
}

export default Child