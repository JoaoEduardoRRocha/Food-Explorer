import React from 'react'
import "./index.scss";

import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";


const Navbar: React.FC = () => {

  return (
    <nav className='navbar-container'>
      <div className='navbar-content'>
        <div className='navbar-container__logo-explorer'>
          <img
            className='navbar-container__logo-explorer__icon-size'
            src="https://64.media.tumblr.com/dd33e1531a07320c65d37b66c7f49acd/b96640fe255e9488-7a/s100x200/49505833860e4aee0c5e40ca97f8f933d420cc28.pnj"
            alt="" />
          <div>
            <p className='navbar-container__logo-explorer-text'>food explorer</p>
            <p className='navbar-container__logo-explorer-admin'>admin</p>
          </div>
        </div>

        <div className='navbar-container__input-search'>
          <IoIosSearch
            size={24}
          />
          <input
            className='navbar-container__input-search__input-bg'
            type="search"
            placeholder='Busque por um prato ou ingrediente'
          />
        </div>

        <div className='navbar-container__orders'>
          <p>Novo prato</p>
        </div>

        <div
          className='navbar-container__logout__icon-size'
        >
          <MdLogout
            size={32}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;