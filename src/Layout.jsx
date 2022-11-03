import './App.css'
import Sidebar from './Dashboard/Sidebar'
import Header from '../src/Dashboard/Header'
import { Outlet } from "react-router-dom"


const Layout = () => { 
    return(  
        <section className='layout'>

            <div className='sidebar-header' >
            <Header/>
            </div>
            <div className='layout-sidebar'>
            <Sidebar/>
            </div>
          
        <main className='content'>
        <Outlet />       
        </main>
        </section>
    ) 
}
 export default Layout;