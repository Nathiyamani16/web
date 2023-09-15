// import React from 'react';
// import { BrowserRouter as Router, Navigate, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar';
// import Home from './Pages/Home';
// // import About from './pages/About';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Navigate>
//           <Route exact path="/" component={Home} />
//           {/* <Route path="/about" component={About} /> */}
//         </Navigate>
//       </div>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import React from 'react';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
           <Route path="/about" exact component={About} />
         <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;