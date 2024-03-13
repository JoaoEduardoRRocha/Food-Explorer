import React, { useEffect } from 'react'
import axios from 'axios';
import "./index.scss";
import Navbar from '../../Components/Navbar';
import NavbarAuthenticated from '../../Components/NavbarAuthenticated';
import HeroSection from '../../Components/HeroSection';
import ArticleCards from "../../Components/ArticleCards"
import Footer from '../../Components/Footer';
import { Food } from '../../Models/food'

const Home = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const [foods, setFoods] = React.useState<Food[]>([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/foods')
      .then(response => setFoods(response.data))
  }, [foods]);

  return (
    <main className='home-container'>
      {isAuthenticated ? <NavbarAuthenticated /> : <Navbar />}
      <HeroSection />
      <ArticleCards foods={foods} />
      <Footer />
    </main>
  );
};

export default Home;