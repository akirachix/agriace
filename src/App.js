
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout  from './Layout';
import  Orders from './Dashboard/Orders'
import Customers from './Dashboard/Customers';
import Dash from './Dashboard/Dash'
import Sales from './Dashboard/Sales'
import Board from './Dashboard/Board'
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Layout/>} >
          {/* <Route path='/dash' element={<Dash/>} /> */}
          <Route path='/orders' element={<Orders/>} />
          <Route path='/sales' element={<Sales/>} />
          <Route path='/customers' element={<Customers/>} />
          <Route path='/board' element={<Board/>} />
          </Route>
      </Routes>
    </BrowserRouter>
       
  );
  
}
export default App;

// import './App.css';
// // import Header from './Components/Header';
// // import Footer from './Components/Footer'
// import Body from './Components/Body'
// import{BrowserRouter as Router,Route, Routes } from 'react-router-dom';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';



// function App() {
//   return (
//     <div>
//     <Router>
//           <Routes>
//           <Route exact path="/" element= {<Body/>}/>
//             <Route exact path="/Login" element = {<Login/>}/>
//             <Route exact path="/SignUp" element = {<SignUp/>}/>

            
//           </Routes>
//         </Router>
//         </div>
//   );
// }

