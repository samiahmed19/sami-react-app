// import React from 'react';

// class Grandparent extends React.Component {
//     render() {
//         return (
//             <div>
//                 Grandparent component
//                 <p>{this.props.count}</p>
//             </div>
//         );
//     }
// }

// export default Grandparent;


//original
import React from 'react'
class Grandparent extends React.Component{
    render() {
        return (
             <>
             <div>
                Grandparent component
                <p>{this.props.count}</p>
             </div>
             </>
        );
    }
}
export default Grandparent;