import React from 'react'
import "./index.scss";
import Navbar from '../../Components/Navbar';
import HeroSection from '../../Components/HeroSection';
import ArticleCards from "../../Components/ArticleCards"
import Footer from '../../Components/Footer';
import { Food } from '../../Models/food';

const Home: React.FC = () => {
  
  const foods: Food[] = []

  return (
    <main className='home-container'>
      <Navbar />
      <HeroSection />
      <ArticleCards foods={foods} />
      <Footer />
    </main>
  );
};

export default Home;