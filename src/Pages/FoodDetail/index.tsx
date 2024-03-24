import { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { PATH } from '../../app/path';
import { Food } from '../../Models/food'

import "./index.scss";
import Footer from '../../Components/Footer';
import axios from 'axios';

const FoodDetail = () => {
  const [food, setFood] = useState<Food>(
    {
      _id: 0,
      name: '',
      description: '',
      price: 0,
      image: '',
      type: '',
      ingredients: []
    }
  )

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const _id = params.get('_id');
    axios.get(`${PATH}/api/foods/get-by-id?_id=${_id}`).then(response => {
      setFood(response.data)
    })
  })

  return (
    <article className='food-detail-container'>
      <div className='food-detail-container__content-max-width'>
        <Link
          className='link-style'
          to="/home">
          <div className='food-detail-container__content__btn-back'>
            <IoIosArrowBack
              size={25}
            />
            <div className='food-detail-container__content__btn-back-text'>
              voltar
            </div>
          </div>
        </Link>
        <div className='food-detail-container__content'>
          <div className='food-detail-container__content__plate'>
            <div>
              <img
                className='food-detail-container__content__plate-img'
                src={food.image}
                alt=""
              />
            </div>

            <div className='food-detail-container__content__plate-name-description'>
              <p className='food-detail-container__content__plate-name'>{food.name}</p>
              <p className='food-detail-container__content__plate-description'>{food.description}</p>
              <div className='food-detail-container__content__plate-ingredients'>
                {food.ingredients.map((ingredient, index) => {
                  return (
                    <p key={index}>{ingredient}</p>
                  )
                })}
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
                <button className='food-detail-container__content__plate-quantify-btn-include'>incluir ∙ R$ {food.price}</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </article >
  );
};

export default FoodDetail;