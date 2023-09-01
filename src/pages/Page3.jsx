import React from 'react'
import Page2 from './Page2'
// import {useState} from 'react';
// const Page3 = () => {
//     return (
//         <React.Fragment>
//             <h3>this is Page3</h3>
//             <div>
//                 Page3
//             </div>
//             <Page2 />
//         </React.Fragment>
//     )
// }
// const Page3 = () => {
//     const [count, setCount] = useState(0);

//     const incrementcount = () => {
//         setCount(count + 1);
//     }
//     return (
//         <React.Fragment>
//             <div>
//                 <h3>page3 component</h3>
//                 <p>{count}</p>
//                 <Page2 count={count} onIncrement={incrementcount}></Page2>
//             </div>
//             <Page2 />
//         </React.Fragment>
//     )
// }

const Page3=(count)=>{
    return(
        <div>
            <h3>page3</h3>
            <p>{count}</p>
            <Page2/>
        </div>
    )
}

export default Page3