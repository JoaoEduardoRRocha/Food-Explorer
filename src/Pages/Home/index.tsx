import React from 'react'
import "./index.scss";
import Navbar from '../../Components/Navbar';
import HeroSection from '../../Components/HeroSection';
import ArticleCards from "../../Components/ArticleCards"
import Footer from '../../Components/Footer';
import { Food } from '../../Models/food';

const Home: React.FC = () => {
  const meal1: Food = {
    _id: 1,
    name: 'Salada Ravanello >',
    description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
    price: 49.97,
    image: 'https://64.media.tumblr.com/8d7ea49ff7eac66034277360b62d8bc3/d37ed12966cfc5da-e5/s1280x1920/a3b9ffac74bb840c551532a8c89003073166b3c2.pnj',
    type: 'meal'
  }
  const meal2: Food = {
    _id: 2,
    name: 'Spaguetti Gambe  >',
    description: 'Massa fresca com camarões e pesto. ',
    price: 79.97,
    image: 'https://64.media.tumblr.com/a0abcc0ae33fecf4e951cfc81dcf874f/31d5ab77c1aee2a7-2e/s1280x1920/db21a83b3a3d744ebdf13fef879d400596634659.pnj',
    type: 'meal'
  }
  const meal3: Food = {
    _id: 3,
    name: 'Torradas de Parma >',
    description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
    price: 25.97,
    image: 'https://64.media.tumblr.com/c3c05e113a040887330bc4dc7103890c/2c57e9f0cbdd94a0-55/s1280x1920/728c431347c43ef0976a2328d587bca313928ded.pnj',
    type: 'meal'
  }
  const meal4: Food = {
    _id: 4,
    name: 'Salada Molla  >',
    description: 'Massa fresca com camarões e pesto. ',
    price: 79.97,
    image: 'https://64.media.tumblr.com/ee7a9d737de2b3c03fe70f761ab4f1ea/254831e132a977f3-00/s1280x1920/028b15ac6cf7df7b9d5b67e8d0b43e88a8979dcf.pnj',
    type: 'meal'
  }

  const dessert1: Food = {
    _id: 1,
    name: 'Prugna Pie >',
    description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar. ',
    price: 79.97,
    image: 'https://64.media.tumblr.com/e47468c58bd0e76cf4e1c049cecd229f/68ab6ba784d1687a-ac/s1280x1920/9917bd89004a52e90f133508710616a00e1c3532.pnj',
    type: 'dessert'
  }

  const dessert2: Food = {
    _id: 2,
    name: 'Peachy pastrie >',
    description: 'Delicioso folheado de pêssego com folhas de hortelã.',
    price: 32.97,
    image: 'https://64.media.tumblr.com/dc3771144cfb84062efd612375bb3a7b/7dab40857916d438-96/s1280x1920/216d28209d34ce177112da23093f1b983d243899.pnj',
    type: 'dessert'
  }

  const dessert3: Food = {
    _id: 3,
    name: 'Macarons  >',
    description: 'Farinha de amêndoas, manteiga, claras e açúcar. ',
    price: 79.97,
    image: 'https://64.media.tumblr.com/fc135e0e972d4f263a08518b10f68a91/306ae4283201fda4-92/s1280x1920/bf8abb715f88772f435caadd8882f83f6a58deda.pnj',
    type: 'dessert'
  }

  const dessert4: Food = {
    _id: 1,
    name: 'Suco de Laranja  >',
    description: 'Suco de laranja gelado, cremoso, docinho.',
    price: 19.97,
    image: 'https://64.media.tumblr.com/a598ec895367894a67834e90a7eed135/555d4c4f34aa98fb-e4/s400x600/110b459ae16a911b848792c32e37784906401a29.pnj',
    type: 'drink'
  }

  const drink1: Food = {
    _id: 2,
    name: 'Espresso >',
    description: 'Café cremoso feito na temperatura e pressões perfeitas.',
    price: 15.97,
    image: 'https://64.media.tumblr.com/08196f989025212eef1220c8f0b1832f/cf8904725b065d83-68/s400x600/bb47d28d017086f6152d2c059417e328a5854e73.pnj',
    type: 'drink'
  }

  const drink2: Food = {
    _id: 3,
    name: 'Suco de maracujá >',
    description: 'Suco de maracujá gelado, cremoso, docinho.',
    price: 13.97,
    image: 'https://64.media.tumblr.com/a598ec895367894a67834e90a7eed135/555d4c4f34aa98fb-e4/s400x600/110b459ae16a911b848792c32e37784906401a29.pnj',
    type: 'drink'
  }

  const drink3: Food = {
    _id: 4,
    name: 'Tè dautunno > ',
    description: 'Chá de anis, canela e limão. Sinta o outono italiano.',
    price: 19.97,
    image: 'https://64.media.tumblr.com/de17d22c7ddc9fd88ba8d458a347046f/8a1e5aa75fd05e37-42/s400x600/ac945ab22b66c5f63b0cca6fefc0d02ee4d3750a.pnj',
    type: 'drink'
  }

  const drink4: Food = {
    _id: 4,
    name: 'Bolo de damasco  >',
    description: 'Damascos frescos em uma massa sem glúten.',
    price: 19.97,
    image: 'https://64.media.tumblr.com/de17d22c7ddc9fd88ba8d458a347046f/8a1e5aa75fd05e37-42/s400x600/ac945ab22b66c5f63b0cca6fefc0d02ee4d3750a.pnj',
    type: 'dessert'
  }

  const foods: Food[] = [
    meal1, meal2, meal3, meal4,
    dessert1, dessert2, dessert3, dessert4,
    drink1, drink2, drink3, drink4
  ]

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