// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
// import Home from './pages/Home'
import Contacts from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

const App=()=>{
  return(
    // <div> App</div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};
export default App
