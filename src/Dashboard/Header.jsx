import '../App.css'


const Header = props => {
  return (


<div class="sidebar-header">

    <div class="Welcome">
        <h1>Dashboard</h1>
    </div>

<form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input 
            type="text"
            id="header-search"
            placeholder="Search"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>


</div>

        
  )
}
export default Header;



