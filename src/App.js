import React,{useState} from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
 
  const [mode, setmode] = useState("light");
  
  const togglebtn=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#072057cd ";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
    }
  }

  return (
   <>
   {/* <Router> */}
   <Navbar mode={mode} togglebtn={togglebtn}/>
   <div className="container">
   {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <Textform title="Enter your text here" mode={mode}/>
          {/* </Route>
        </Switch> */}
   </div>
   {/* </Router> */}
   </>
  );
}

export default App;
