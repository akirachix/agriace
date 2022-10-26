import React from "react";
import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Orders from './components/Orders'
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Sales from "./components/Sales";
import Layout from "./components/Layout";
import Graphs from "./components/Salesgraphs"


function App() {
  return (
    
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Layout/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/customers' element={<Customers/>}/>
      <Route path='/sales' element={<Sales/>}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
