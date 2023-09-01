// import React from 'react';
// import Parent from './Parent';

// class Child extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//     }

//     incrementCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     }

//     decrementCount = () => {
//         // if (this.state.count > 0) {
//         //     this.setState({ count: this.state.count - 1 });
//         // }
//         this.setState({ count: 0 });
//     }

//     render() {
//         return (
//             <div>
//                 Child component
//                 <p>{this.state.count}</p>
//                 <button onClick={this.incrementCount}>increment count</button>
//                 <button onClick={this.decrementCount}>decrement count</button>
//                 <Parent
//                     count={this.state.count}
//                     increment={this.incrementCount}
//                     decrement={this.decrementCount}
//                 />
//             </div>
//         );
//     }
// }

// export default Child;










//original
import React from 'react'
import Parent from './Parent.jsx';
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrementCount = () => {
        // if (this.state.count > 0) {
        //     this.setState({ count: this.state.count - 1 });
        // }
        this.setState({ count: 0 });
    }
    render() {
        return (
            <>
                <div>
                    Child component
                    <p>{this.state.count}</p>
                    <button onClick={this.incrementCount}>increment count</button>
                    <button onClick={this.decrementCount}>decrement count</button>
                    <Parent 
                    count={this.state.count}
                    increment={this.incrementCount}
                    decrement={this.decrementCount} />
                    
                </div>
            </>
        )
    }
}

export default Child