import React from 'react';
import "./index.scss";
import { Food } from '../../Models/food';
import FoodCard from '../FoodCard';

interface ArticleCardsProps {
  foods: Food[];
}

const ArticleCards: React.FC<ArticleCardsProps> = (props) => {
  const meals = props.foods.filter(food => food.type === 'meal');
  const desserts = props.foods.filter(food => food.type === 'dessert');
  const drinks = props.foods.filter(food => food.type === 'drink');

  return (
    <div>
      <legend className='title-food'>Refeições</legend>
      <div className='align-cards-meal'>
        {
          meals.map((food, index) => (
            <div key={index}>
              <FoodCard
                key={food._id}
                food={food}
              />
            </div>
          ))
        }
      </div>

      <legend className='title-food'>Sobremesas</legend>
      <div className='align-cards-dessert'>
        {
          desserts.map((food, index) => (
            <div key={index}>
              <FoodCard
                key={food._id}
                food={food}
              />
            </div>
          ))
        }
      </div>

      <legend className='title-food'>Bebidas</legend>
      <div className='align-cards-drink'>
        {
          drinks.map((food, index) => (
            <div key={index}>
              <FoodCard
                key={food._id}
                food={food}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ArticleCards;
