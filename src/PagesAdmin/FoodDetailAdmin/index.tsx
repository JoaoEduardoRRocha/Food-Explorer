import React from 'react'
import "./index.scss";
import NavbarAdmin from '../../Components/NavbarAdmin';
import Footer from '../../Components/Footer';

import { IoIosArrowBack } from "react-icons/io";

const FoodDetailAdmin: React.FC = () => {

  return (
    <main className='home-container'>
      <NavbarAdmin />
      <div className='food-detail-container__content-max-width'>
        <div className='food-detail-container__content__btn-back'>
          <IoIosArrowBack
            size={25}
          />
          <div className='food-detail-container__content__btn-back-text'>
            voltar
          </div>
        </div>
        <div className='food-detail-container__content'>
          <div className='food-detail-container__content__plate'>
            <div>
              <img
                className='food-detail-container__content__plate-img'
                src="https://64.media.tumblr.com/8d7ea49ff7eac66034277360b62d8bc3/d37ed12966cfc5da-e5/s1280x1920/a3b9ffac74bb840c551532a8c89003073166b3c2.pnj"
                alt=""
              />
            </div>

            <div className='food-detail-container__content__plate-name-description'>
              <p className='food-detail-container__content__plate-name'>Salada Ravanello</p>
              <p className='food-detail-container__content__plate-description'>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
              <div className='food-detail-container__content__plate-ingredients'>
                alface
              </div>

              <div className='food-detail-container__content__plate-quantify-container'>
                <button className='food-detail-container__content__plate-quantify-btn-edit'>Editar prato</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FoodDetailAdmin;