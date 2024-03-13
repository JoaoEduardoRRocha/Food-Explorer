import "./index.scss";
import NavbarAdmin from '../../ComponentsAdmin/NavbarAdmin';
import Footer from '../../Components/Footer';
import SelectComponent from '../../Components/SelectComponent';

import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const EditPlateAdmin = ({ isAdmin }: { isAdmin: boolean }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin) {
      navigate('/home')
    }
  })

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
            <label className='add-plate-container__content__label-main'>Editar prato</label>
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
                <input className='add-plate-container__content__upload-file' id="updload-file" type='file' />
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
              <SelectComponent />
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
            >
            </textarea>
          </div>

          <button
            className="add-plate-container__content__btn-save"
          >
            Salvar alterações
          </button>
        </div>

      </div>
      <Footer />
    </main>
  );
};

export default EditPlateAdmin;