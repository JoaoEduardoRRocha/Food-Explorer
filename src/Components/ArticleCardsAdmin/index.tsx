import React from 'react'
import "./index.scss";

import { PiPencilSimple } from "react-icons/pi";

const Home: React.FC = () => {

  return (
    <article className='article-content'>
      <legend className='article-content__title-article'>Refeições</legend>

      <div className='article-content__card-container'>
        <div className='article-content__card-container__img-food'>
          <img
            className='article-content__card-container__img-food-size'
            src="https://64.media.tumblr.com/8d7ea49ff7eac66034277360b62d8bc3/d37ed12966cfc5da-e5/s1280x1920/a3b9ffac74bb840c551532a8c89003073166b3c2.pnj"
            alt=""
          />
        </div>
        <div className='article-content__card-container__name-food'>
          Salada Ravanello
        </div>
        <div className='article-content__card-container__description-food'>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
        </div>
        <div className='article-content__card-container__price-food'>
          R$ 49,97
        </div>

        <div className='article-content__card-container__pencil-icon'>
          <PiPencilSimple
            size={25}
          />
        </div>
      </div>
    </article>
  );
};

export default Home;