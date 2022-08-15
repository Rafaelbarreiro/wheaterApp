import React from 'react';
import SearchBar from './SearchBar.jsx';
//import About from './About.jsx';
import { Link } from 'react-router-dom';
import s from'./Nav.module.css';

export default function Nav({onSearch}) {
  return (
    <nav >
     <Link to='/'>
      <span className={s.font}>
        Home
      </span> 
     </Link>
     <Link to='/about'>
       <span className={s.font}>About</span>
     </Link>
      <SearchBar onSearch={onSearch}
      />
</nav>
  );
};

//export default Nav;
