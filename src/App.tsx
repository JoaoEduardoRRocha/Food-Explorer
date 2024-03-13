import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.scss'
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
import { getUser } from './app/auth-helper';
import { User } from './Models/user';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    _id: '0',
    name: '',
    email: '',
    role: '',
    createdAt: '',
  });

 const checkAuth = async () => {
    const currentUser = await getUser()
    if (currentUser) {
      setIsAuthenticated(true)
    }
    if (currentUser.role === 'admin') {
      setIsAdmin(true)
    }
    setUser(currentUser)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    checkAuth()
  }, [isLoading])

  return (
    <>
      <BrowserRouter>
        {isLoading ? <Loading /> :
          <Routes>
            <Route path="/login" element={<SignIn isAuthenticated={isAuthenticated} isAdmin={isAdmin} />} />
            <Route path="/sign-up" element={<SignUp isAuthenticated={isAuthenticated} />} />
            <Route path="/forgot-password" element={<ForgotPassword isAuthenticated={isAuthenticated} />} />
            <Route path="/change-password" element={<ChangePassword isAuthenticated={isAuthenticated} />} />
            <Route path="/home" element={<Home isAuthenticated={isAuthenticated} />} />
            <Route path="/home-admin" element={<HomeAdmin isAdmin={isAdmin} />} />
            <Route path="/food-detail" element={<FoodDetail isAuthenticated={isAuthenticated} />} />
            <Route path="/food-detail-admin" element={<FoodDetailAdmin isAdmin={isAdmin}/>} />
            <Route path="/add-plate-admin" element={<AddPlateAdmin isAdmin={isAdmin}/>} />
            <Route path="/edit-plate-admin" element={<EditPlateAdmin isAdmin={isAdmin}/>} />
          </Routes>
        }
      </BrowserRouter>
    </>
  )
}

export default App
