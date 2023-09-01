import React from 'react'
import Page1 from './Page1'
import { useState } from 'react';
// const Page2 = () => {
//     return (

//         <React.Fragment>
//             <h3>this is Page2</h3>
//             <div>
//                 page2
//             </div>
//             <Page1 />
//         </React.Fragment>
//     )
// }
// const Page2 = ({ count, onIncrement ,product}) => {
//     // console.log(product)
//     return (
//         <React.Fragment>
//             <div>
//                 <h3> page2 component</h3>
//                 <p>Count: {count}</p>
//                 <Page1 onIncrement={handleIncrement} />
//                 {/* <button onClick={onIncrement}>Increment </button> */}
//                 {/* product.map(
//                     (product)=>{
//                     return <Page1 product={product}/>
//                 }) */}
//             </div>

//             <Page1 />
//         </React.Fragment>
//     )
// }
const Page2 = () => {
    // console.log(product)
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };
    return (
        <React.Fragment>
            <div>
                <h3> page2 component</h3>
                <p>Count: {count}</p>
                <Page1 onIncrement={handleIncrement} />
                {/* <button onClick={onIncrement}>Increment </button> */}
                {/* product.map(
                    (product)=>{
                    return <Page1 product={product}/>
                }) */}
            </div>

            {/* <Page1 /> */}
        </React.Fragment>
    )
}

export default Page2