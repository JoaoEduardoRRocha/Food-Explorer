import React, { useEffect } from 'react'
import "./index.scss";
import HeroSection from '../../Components/HeroSection';
import Footer from '../../Components/Footer';
import { Food } from '../../Models/food';
import ArticleCardsAdmin from '../../ComponentsAdmin/ArticleCardsAdmin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomeAdmin = ({ isAdmin }: { isAdmin: boolean }) => {
  const navigate = useNavigate()
  const [foods, setFoods] = React.useState<Food[]>([]);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/home')
    }
    console.log(isAdmin)
    axios.get('http://localhost:3000/api/foods')
      .then(response => setFoods(response.data))
  }, [isAdmin, navigate]);

  return (
    <main className='home-container'>
      <HeroSection />
      <ArticleCardsAdmin foods={foods} />
      <Footer />
    </main>
  );
};

export default HomeAdmin;