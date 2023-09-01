// import React from 'react';
// import Grandparent from './Grandparent';

// class Parent extends React.Component {
//     render() {
//         return (
//             <div>
//                 Parent component
//                 <button onClick={this.props.increment}>increment</button>
//                 <button onClick={this.props.decrement}>decrement</button>
//                 <Grandparent count={this.props.count} />
//             </div>
//         );
//     }
// }

// export default Parent;

// original
import React from 'react';
import Grandparent from './Grandparent';
class Parent extends React.Component {
    render() {
        return (
            <>
                <div>
                    Parent component
                    <button onClick={this.props.increment}>increment</button>
                    <button onClick={this.props.decrement}>decrement</button>
                    <Grandparent count={this.props.count}/>
                </div>
            </>
        )
    }
}

export default Parent;