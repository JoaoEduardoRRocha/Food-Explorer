import React from 'react';
import "./index.scss";
import { Food } from '../../Models/food';
import FoodCardAdmin from '../FoodCardAdmin';

interface ArticleCardsAdminProps {
  foods: Food[];
}

const ArticleCardsAdmin: React.FC<ArticleCardsAdminProps> = (props) => {
  const meals = props.foods.filter(food => food.type === 'Refeição');
  const desserts = props.foods.filter(food => food.type === 'Sobremesa');
  const drinks = props.foods.filter(food => food.type === 'Bebida');

  return (
    <div>
      <legend className='title-food'>Refeições</legend>
      <div className='align-cards-meal'>
        {
          meals.map((food, index) => (
            <div key={index}>
              <FoodCardAdmin
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
              <FoodCardAdmin
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
              <FoodCardAdmin
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

export default ArticleCardsAdmin;
