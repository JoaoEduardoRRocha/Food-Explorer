import { Link } from "react-router-dom";
import { removeToken } from "../../app/auth-helper";
import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { Food } from "../../Models/food";
import { useState } from "react";

import "./index.scss";
import InputSearch from "../InputSearch";

const Navbar = ({ isAuthenticated, isAdmin, foods }: { isAuthenticated: boolean, isAdmin: boolean, foods: Food[] }) => {
  const [search, setSearch] = useState('')
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([])

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    if (e.target.value.trim() === '') {
      setFilteredFoods([]);
    } else {
      const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredFoods(filteredFoods);
    }
  }

  const handleLogout = () => {
    removeToken()
    window.location.reload();
  }
  
  return (
    <nav className='navbar-container'>
      <div className='navbar-content'>
        {isAdmin ?
          <div className='navbar-container__logo-explorer'>
            <img
              className='navbar-container__logo-explorer__icon-size'
              src="https://64.media.tumblr.com/dd33e1531a07320c65d37b66c7f49acd/b96640fe255e9488-7a/s100x200/49505833860e4aee0c5e40ca97f8f933d420cc28.pnj"
              alt="" />
            <div className="navbar-container__margin-logo-admin">
              <p className='navbar-container__logo-explorer-text'>food explorer</p>
              <p className='navbar-container__logo-explorer-admin'>admin</p>
            </div>
          </div>
          :
          <div className='navbar-container__logo-explorer'>
            <img
              className='navbar-container__logo-explorer__icon-size'
              src="https://64.media.tumblr.com/dd33e1531a07320c65d37b66c7f49acd/b96640fe255e9488-7a/s100x200/49505833860e4aee0c5e40ca97f8f933d420cc28.pnj"
              alt="" />
            <p>food explorer</p>
          </div>
        }

        <div className='navbar-container__input-search'>
          <IoIosSearch
            size={24}
          />
          <div> 
            <InputSearch
              type='search'
              placeholder='Digite aqui seu prato'
              value={search}
              onChange={(e) => handleSearchInput(e)}
            />
            {filteredFoods.length > 0 && (
              <div className='navbar-container__search-results'>
                {filteredFoods.map(food => (
                  <Link
                    className="link-search"
                    to={`/food-detail?_id=${food._id}`}>
                    {food.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {isAuthenticated ?
          <div
            className='navbar-container__logout__icon-size'
            onClick={() => handleLogout()}
          >
            <MdLogout
              size={32}
            />
          </div>
          :
          <Link
            className='link-style'
            to="/login"
          >
            <div
              className='navbar-container__orders'>
              <p>Fazer login</p>
            </div>
          </Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;