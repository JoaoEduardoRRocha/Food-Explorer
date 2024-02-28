import React from 'react'
import "./index.scss";
import { Food } from '../../Models/food';
import { FaRegHeart } from "react-icons/fa";

interface FoodCardProps {
  food: Food;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
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

        <div className='article-content__card-container__plus-minus-icon'>
          <div>-</div>
          <div>01</div>
          <div>+</div>
          <button className='article-content__card-container__include'>incluir</button>
        </div>

        <div className='article-content__card-container__like-icon'>
          <FaRegHeart size={25} />
        </div>
      </div>
    </article>
  );
}

export default FoodCard;