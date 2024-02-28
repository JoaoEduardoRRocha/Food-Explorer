import React from 'react'
import "./index.scss";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import { IoIosArrowBack } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FoodDetail: React.FC = () => {

  return (
    <article className='food-detail-container'>
      <Navbar />
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
                <div className='food-detail-container__content__plate-quantify-minus'>
                  <FaMinus
                    size={24}
                  />
                </div>
                <div className='food-detail-container__content__plate-quantify'>01</div>
                <div className='food-detail-container__content__plate-quantiy-plus'>
                  <FaPlus
                    size={24}
                  />
                </div>
                <button className='food-detail-container__content__plate-quantify-btn-include'>incluir ∙ R$ 25,00</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </article>
  );
};

export default FoodDetail;