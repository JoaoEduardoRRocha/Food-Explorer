import React from 'react'
import "./index.scss";
import NavbarAdmin from '../../Components/NavbarAdmin';
import Footer from '../../Components/Footer';

import { IoIosArrowBack } from "react-icons/io";

const AddPlateAdmin: React.FC = () => {

  return (
    <main className='add-plate-container'>
      <NavbarAdmin />
      <div className='add-plate-container__content-max-width'>
        <div className='add-plate-container__content__btn-back'>
          <IoIosArrowBack
            size={25}
          />
          <div className='add-plate-container__content__btn-back-text'>
            voltar
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AddPlateAdmin;