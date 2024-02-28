import React from 'react'
import "./index.scss";
import Navbar from '../../Components/Navbar';
import HeroSection from '../../Components/HeroSection';
import ArticleCards from "../../Components/ArticleCards"
import Footer from '../../Components/Footer';

const Home: React.FC = () => {

  return (
    <main className='home-container'>
      <Navbar />
      <HeroSection />
      <ArticleCards />
      <Footer />
    </main>
  );
};

export default Home;