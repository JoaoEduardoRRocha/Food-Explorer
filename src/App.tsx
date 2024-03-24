import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { PATH } from './app/path';
import { getUser } from './app/auth-helper';

import './App.scss'
import axios from 'axios'
import Loading from './Components/Loading'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import ForgotPassword from './Pages/ForgotPassword'
import ChangePassword from './Pages/ChangePassword'
import Home from './Pages/Home'
import HomeAdmin from './PagesAdmin/HomeAdmin'
import FoodDetail from './Pages/FoodDetail'
import FoodDetailAdmin from './PagesAdmin/FoodDetailAdmin'
import AddPlateAdmin from './PagesAdmin/AddPlateAdmin'
import EditPlateAdmin from './PagesAdmin/EditPlateAdmin'
import Navbar from './Components/Navbar'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [foods, setFoods] = useState([])

  const checkAuth = async () => {
    const currentUser = await getUser()
    if (currentUser) {
      setIsAuthenticated(true)
    }
    if (currentUser.role === 'admin') {
      setIsAdmin(true)
    }
  }

  const checkFoods = async () => {
    await axios.get(`${PATH}/api/foods`).then((response) => {
      setFoods(response.data)
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    checkAuth()
    checkFoods()
  }, [isLoading])

  return (
    <>
      <BrowserRouter>
        {isLoading ? <Loading /> :
        <div className='background'>
          <Navbar foods={foods} isAdmin={isAdmin} isAuthenticated={isAuthenticated} />
          <Routes>
            <Route path="/login" element={<SignIn isAuthenticated={isAuthenticated} isAdmin={isAdmin} />} />
            <Route path="/sign-up" element={<SignUp isAuthenticated={isAuthenticated} />} />
            <Route path="/forgot-password" element={<ForgotPassword isAuthenticated={isAuthenticated} />} />
            <Route path="/change-password" element={<ChangePassword isAuthenticated={isAuthenticated} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home-admin" element={<HomeAdmin isAdmin={isAdmin} />} />
            <Route path="/food-detail" element={<FoodDetail />} />
            <Route path="/food-detail-admin" element={<FoodDetailAdmin isAdmin={isAdmin} />} />
            <Route path="/add-plate-admin" element={<AddPlateAdmin isAdmin={isAdmin} />} />
            <Route path="/edit-plate-admin" element={<EditPlateAdmin isAdmin={isAdmin} />} />
          </Routes>
        </div>
        }
      </BrowserRouter>
    </>
  )
}

export default App
