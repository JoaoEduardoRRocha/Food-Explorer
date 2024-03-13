import { Link } from "react-router-dom";
import "./index.scss";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-content'>
        <div className='navbar-container__logo-explorer'>
          <img
            className='navbar-container__logo-explorer__icon-size'
            src="https://64.media.tumblr.com/dd33e1531a07320c65d37b66c7f49acd/b96640fe255e9488-7a/s100x200/49505833860e4aee0c5e40ca97f8f933d420cc28.pnj"
            alt="" />
          <p>food explorer</p>
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

        <Link
          className='link-style'
          to="/login"
        >
          <div 
            className='navbar-container__orders'>
            <p>Fazer login</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;