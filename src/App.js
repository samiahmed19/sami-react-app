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
// import Contacts from './pages/Contact'
// import Home from './pages/Home'
// import About from './pages/About'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Page3 from './pages/Page3'
// import Products from './pages/Products'
// import Parent from './pages/Parent.jsx'
// import Page3 from './pages/Page3'
// import Parent from './classcomponents/Parent'
// import Child from './classcomponents/Child.jsx'
// import Map from './pages/Mapparent'
import Mapparent from './pages/Mapparent'

const App = () => {
  return (
    // <div> App</div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mapparent/>} />
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/products" element={<Products/>}/> */}
      </Routes>
      <Footer />
    </Router>
  );
};
export default App
