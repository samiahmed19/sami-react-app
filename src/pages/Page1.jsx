import React from 'react'

const Page1 = ({onIncrement}) => {
    // const product=[
    //     {
    //         price:9999,
    //         name:"Iphone xr max",
    //         qty:1
    //     },
    //     {
    //         price:8888,
    //         name:"jio max",
    //         qty:0
    //     },
    // ]
    return (
        <React.Fragment>
        <h3>this is Page1</h3>
        {/* <div>
            Page1
        </div> */}
        {/* <Page1 product={product}/> */}
        <button onClick={onIncrement}>Increment Count</button>
        </React.Fragment>
    )
}

export default Page1