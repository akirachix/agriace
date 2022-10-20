import './App.css';
import{BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import AgriAce from './Components/AgriAcePage';
import Login from './Components/Login';



// import Signup from './components/SignUp/Signupform';

function App() {
  return (
    <div className="App">
     
        {/* <Signup/> */}
         {/* <'Login'/> */}
        <Router>
          <Routes>
          <Route exact path="/" element= {<AgriAce/>}/>
            <Route exact path="/Signup" element = {<Login/>}/>
            <Route exact path="/Login" element= {<Login/>}/>
            

          </Routes>
        </Router>
    </div>
  );
}

export default App;