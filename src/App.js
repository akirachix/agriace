import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer'
import Body from './Components/Body'
import{BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';



function App() {
  return (
    <div>
    <Router>
          <Routes>
          <Route exact path="/" element= {<Body/>}/>
            <Route exact path="/Login" element = {<Login/>}/>
            <Route exact path="/SignUp" element = {<SignUp/>}/>

            
          </Routes>
        </Router>
        </div>
  );
}

export default App;
