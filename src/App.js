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
          <Route path='/dash' element={<Dash/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/sales' element={<Sales/>} />
          <Route path='/customers' element={<Customers/>} />
          <Route path ='/board' element={<Board/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;