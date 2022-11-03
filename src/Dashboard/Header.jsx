import '../App.css'


const Header = props => {
  return (


<div class="sidebar-header">

    <div class="Welcome">
        <h1>Dashboard</h1>
    </div>

    {/* <div class="searchBar">
        <input type="text" placeholder="Search.."/> */}

        <div className="searchForm" style={props.searchFormStyles}>
        <input
          type="text" 
          className="searchForm__input"
          placeholder={props.placeholder}
          value={props.value}
          onChange={e => {
            props.onchange(e);
          }}
          style={props.searchBoxStyles}
        />
         <button
          type="submit"
          className="searchForm__btn"
          style={props.searchButtonStyles}
          onClick={e => {
            props.OnSubmit(e);
          }}
        >
          <i className="fa fa-search" style={props.searchIconStyles} />
        </button>
    </div>


</div>

        
  )
}
export default Header;



// import '../App.css';
// // import logo from '../../images/logo.png';
// import { useRef, useEffect } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { useGlobalContext } from '../contex/contex'


// const Header = () => {
//   const { searchMeals } = useGlobalContext();
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     searchMeals(inputRef.current.value);
//   };

//   return (
//     <div className="header">
//       {/* <img className="header__logo" src={logo} alt="logo" /> */}
//       <p>Available Recipes</p>

//       <form className="header__search" onSubmit={handleSubmit}>
//         <AiOutlineSearch className="header__icon" />
//         <input
//           ref={inputRef}
//           className="header__input"
//           type="text"
//           placeholder="Search for recipes"
//         />

//         <button className="header__button" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };
// export default Header;







