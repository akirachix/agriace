import './layout.css'
import Sidebar from './Dashboard'
// import Header from './Header'
import { Outlet } from "react-router-dom"
import DashContent from './DashContent'



const Layout = () => { 
    return(  
        <section className='layout'>

            <div className='dashcontent' >
            <DashContent/>

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