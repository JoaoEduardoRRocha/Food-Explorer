import React from 'react'
import "./index.scss";
import Navbar from '../../Components/Navbar';
import HeroSection from '../../Components/HeroSection';
import ArticleCards from "../../Components/ArticleCards"

const Home: React.FC = () => {

  return (
    <main className='home-container'>
      <Navbar />
      <HeroSection />
      <ArticleCards />
    </main>
  );
};

export default Home;