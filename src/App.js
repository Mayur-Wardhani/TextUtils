import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const[mode, setMode] = useState("Light");
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() =>{
      setAlert(null);
    },2000)
    

  }

  const toggleMode = () => {
    if(mode === "Light"){
      console.log("in toggle mode")
      setMode("Dark")
      showAlert("Dark mode enabled", "success")
      document.title = "Text Utils - dark mode"
    }
    else{
      setMode("Light")
      showAlert("Light mode enabled", "success")
      document.title = "Text Utils - light mode"
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode} />
    <Alert alert = {alert}></Alert>
    <div className="container my-3">
      
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert = {showAlert}  heading = "Enter text to be analyzed"/>
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router>  */}
    {/* <About/> */}
    
    
    </>
    
    
  );
}

export default App;
