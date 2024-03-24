import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./index.scss";
import Footer from '../../Components/Footer';
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Food } from '../../Models/food'
import { useNavigate } from 'react-router-dom'
import SelectComponent from '../../Components/SelectComponent';
import InputFile from '../../Components/InputFile';
import { PATH } from '../../app/path';

const AddPlateAdmin = ({ isAdmin }: { isAdmin: boolean }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin) {
      navigate('/home')
    }
  })

  const [food, setFood] = useState<Food>({
    _id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
    type: 'Refeição',
    ingredients: []
  });

  const [currentIngredient, setCurrentIngredient] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id)
    setFood({ ...food, [e.target.id]: e.target.value });
  }

  const handleIngredientInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentIngredient(e.target.value)
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFood({ ...food, [e.target.id]: e.target.value });
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFood({ ...food, type: e.target.value });
  }

  const handleSubmitIngredients = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentFood = food;
    currentFood.ingredients.push(currentIngredient);
    setFood(currentFood);
    setCurrentIngredient('')
  }

  const handleDeleteIngredient = (index: number) => {
    const ingredients = food.ingredients;
    ingredients.splice(index, 1);
    setFood((prevFood) => ({
      ...prevFood,
      ingredients: ingredients
    }));
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleSubmit = () => {
    axios.post(`${PATH}/api/foods/`, food)
      .then(() => {
        navigate('/home-admin')
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='add-plate-container'>
      <div className='add-plate-container__content-max-width'>
        <div className='add-plate-container__content__btn-back'>
          <Link
            className="link-style"
            to='/home-admin'
          >
            <div className='add-plate-container__content__btn-back-text'>
              <IoIosArrowBack
                size={25}
              />
              voltar
            </div>
          </Link>
        </div>

        <div className='add-plate-container__content__label-fields'>
          <div>
            <label className='add-plate-container__content__label-main'>Editar Prato</label>
          </div>

          <div className='add-plate-container__content__align-label-fields'>
            <div>
              <div>
                <label className='add-plate-container__content__label'>Imagem do prato</label>
                <label className='add-plate-container__content__btn-upload-img' htmlFor="upload-file">
                  <FiUpload
                    size={24}
                  />
                  Selecionar imagem
                </label>
                <InputFile onChange={(e) => handleImageChange(e)} />
              </div>
            </div>

            <div>
              <div>
                <label
                  className='add-plate-container__content__label'
                >
                  Nome
                </label>
              </div>
              <input
                id='name'
                className='add-plate-container__content__field-name'
                type='text'
                placeholder='Ex: Salada Ceasar'
                value={food.name}
                name='name'
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div>
              <div>
                <label
                  className='add-plate-container__content__label'
                >
                  Categoria
                </label>
                <SelectComponent
                  value={food.type}
                  onChange={(e) => handleCategoryChange(e)}
                />
              </div>
            </div>
          </div>

          <div className='add-plate-container__content__align-label-fields'>
            <div>
              <div>
                <label
                  className='add-plate-container__content__label'
                >
                  Ingredientes
                </label>
              </div>
              <div className="add-plate-container__content__ingredients" >
                {food?.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="add-plate-container__content__new-ingredients"
                  >
                    {ingredient}
                    <IoMdClose size={15} onClick={() => handleDeleteIngredient(index)} />
                  </div>
                ))}
                <form onSubmit={(e) => {
                  handleSubmitIngredients(e)
                }}>
                  <input
                    className='add-plate-container__content__ingredients-btn'
                    type='text'
                    placeholder='Adicionar'
                    value={currentIngredient}
                    name='currentIngredient'
                    onChange={(e) => handleIngredientInputChange(e)}
                  />
                </form>
              </div>
            </div>

            <div>
              <div>
                <label
                  className='add-plate-container__content__label'
                >
                  Preço
                </label>
              </div>
              <input
                id='price'
                className="add-plate-container__content__price"
                type="text"
                placeholder='R$ 00,00'
                name='price'
                value={food?.price}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          <div>
            <div>
              <label
                className='add-plate-container__content__label'
              >
                Descrição
              </label>
            </div>
            <textarea
              id='description'
              className="add-plate-container__content__description"
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              name='description'
              value={food?.description}
              onChange={(e) => handleTextAreaChange(e)}
            >
            </textarea>
          </div>

          <button
            className="add-plate-container__content__btn-save"
            onClick={() => handleSubmit()}
          >
            Salvar alterações
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AddPlateAdmin;