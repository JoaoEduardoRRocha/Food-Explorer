import React, { useEffect } from 'react'
import axios from 'axios';
import "./index.scss";
import NavbarAdmin from '../../ComponentsAdmin/NavbarAdmin';
import Footer from '../../Components/Footer';
// import SelectComponent from '../../Components/SelectComponent';

import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Food } from '../../Models/food'
import { useNavigate } from 'react-router-dom'

const AddPlateAdmin = ({ isAdmin }: { isAdmin: boolean }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin) {
      navigate('/home')
    }
  })


  const [food, setFoods] = React.useState<Food>({
    _id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
    type: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoods((prevFood) => ({
      ...prevFood,
      [e.target.name]: e.target.value
    }));
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFoods((prevFood) => ({
      ...prevFood,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = () => {
    axios.post('http://localhost:3000/api/foods/', food)
      .then(() => {
        navigate('/home-admin')
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='add-plate-container'>
      <NavbarAdmin />
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
            <label className='add-plate-container__content__label-main'>Adicionar Prato</label>
          </div>

          <div className='add-plate-container__content__align-label-fields'>
            <div>
              <div>
                <label className='add-plate-container__content__label'>Imagem do prato</label>
                <label className='add-plate-container__content__btn-upload-img' htmlFor="updload-file">
                  <FiUpload
                    size={24}
                  />
                  Selecionar imagem
                </label>
                <input
                  className='add-plate-container__content__upload-file'
                  id="updload-file"
                  type='file'
                  value={food?.image}
                  name='image'
                />
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
                className='add-plate-container__content__field-name'
                type='text'
                placeholder='Ex: Salada Ceasar'
                value={food?.name}
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
                <div
                  className="add-plate-container__content__new-ingredients"
                >
                  Pão Naan
                  <IoMdClose size={15} />
                </div>
                <button
                  className="add-plate-container__content__ingredients-btn"
                >
                  Adicionar +
                </button>
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