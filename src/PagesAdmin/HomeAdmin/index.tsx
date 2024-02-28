import React from 'react'
import "./index.scss";
import NavbarAdmin from '../../Components/NavbarAdmin';
import HeroSection from '../../Components/HeroSection';
import ArticleCardsAdmin from "../../Components/ArticleCardsAdmin"
import Footer from '../../Components/Footer';

const Home: React.FC = () => {

  return (
    <main className='home-container'>
      <NavbarAdmin />
      <HeroSection />
      <ArticleCardsAdmin />
      <Footer />
    </main>
  );
};

export default Home;