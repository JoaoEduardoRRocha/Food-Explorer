import React from 'react'
import "./index.scss";

const HeroSection: React.FC = () => {
  return (
    <section className='section-content'>
      <div className='section-content__hero-img'>
        <img
          src="https://64.media.tumblr.com/77a0b7b80c0defcd09ff9c1a8b4eeb6c/adab3fa58b037a12-22/s640x960/ebb2ee11e074da1173f09969a3610208ed843d8e.pnj"
          alt=""
        />
      </div>
      <div className='section-content__text-content'>
        <p className='section-content__text-content__h1'>Sabores inigualáveis</p>
        <p className='section-content__text-content__h2'>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </section>
  );
};

export default HeroSection;