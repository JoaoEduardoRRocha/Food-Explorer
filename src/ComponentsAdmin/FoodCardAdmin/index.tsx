import React from 'react'
import "./index.scss";
import { Food } from '../../Models/food';
import { PiPencilSimple } from "react-icons/pi";
import { Link } from 'react-router-dom';

interface FoodCardAdminProps {
  food: Food;
}

const FoodCardAdmin: React.FC<FoodCardAdminProps> = ({ food }) => {
  return (
    <article className='article-content'>
      <div className='article-content__card-container' key={food._id}>
        <div className='article-content__card-container__img-food'>
          <img
            className='article-content__card-container__img-food-size'
            src={food.image}
            alt=""
          />
        </div>
        <div className='article-content__card-container__name-food'>
          {food.name}
        </div>
        <div className='article-content__card-container__description-food'>
          {food.description}
        </div>
        <div className='article-content__card-container__price-food'>
          R$ {food.price.toFixed(2)}
        </div>

        <Link 
        to='/edit-plate-admin'
        className='link-style'
        >


        <div className='article-content__card-container__pencil-icon'>
          <PiPencilSimple
            size={25}
          />
        </div>
        </Link>
      </div>
    </article>
  );
}

export default FoodCardAdmin;