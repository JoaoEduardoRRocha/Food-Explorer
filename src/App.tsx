import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import ForgotPassword from './Pages/ForgotPassword'
import Home from './Pages/Home'
import HomeAdmin from './PagesAdmin/HomeAdmin'
import FoodDetail from './Pages/FoodDetail'
import FoodDetailAdmin from './PagesAdmin/FoodDetailAdmin'
import AddPlateAdmin from './PagesAdmin/AddPlateAdmin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home-admin" element={<HomeAdmin />} />
          <Route path="/food-detail" element={<FoodDetail />} />
          <Route path="/food-detail-admin" element={<FoodDetailAdmin />} />
          <Route path="/add-plate-admin" element={<AddPlateAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
