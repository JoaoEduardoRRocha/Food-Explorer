import React, { useEffect } from 'react'
import { Food } from '../../Models/food'
import { PATH } from '../../app/path';

import axios from 'axios';
import "./index.scss";
import HeroSection from '../../Components/HeroSection';
import ArticleCards from "../../Components/ArticleCards"
import Footer from '../../Components/Footer';

const Home = () => {
  const [foods, setFoods] = React.useState<Food[]>([]);
  useEffect(() => {
    axios.get(`${PATH}/api/foods`)
      .then(response => setFoods(response.data))
  }, [foods]);

  return (
    <main className='home-container'>
      <HeroSection />
      <ArticleCards foods={foods} />
      <Footer />
    </main>
  );
};

export default Home;