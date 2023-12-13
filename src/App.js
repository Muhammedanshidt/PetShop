import './App.css';
import { Route,Routes } from 'react-router-dom';
import UserRegistration from './components/UserRegistration';
import Main from "./components/Main"
import "bootstrap/dist/css/bootstrap.min.css"
import { createContext, useState } from 'react';
import UserLogin from './components/UserLogin';
import NavBar from './components/NavBar';
import Dog from './components/Dog';
import Cat from './components/Cat';
import AllCollection from './components/AllCollection';
import Cart from './components/Cart';
import productsData from './components/Data/product';
import Payment from './components/Payment';
import { userData } from './components/Data/userData';
import AdminLogin from './components/Admin/AdminLogin';
import AdminHomeMain from './components/Admin/AdminHomeMain';
import AdminProduct from './components/Admin/AdminProduct';
import AdminUsers from './components/Admin/AdminUsers';
import EditAdminProduct from './components/Admin/EditAdminProduct';
import AdminHome from './components/Admin/AdminHome';
import AdminAddproduct from './components/Admin/AdminAddproduct';

export const myContext = createContext()

function App() {
  const intialValues = {username: "",email: "", password: ""};
  const [formValue, setFormValue] = useState(intialValues);
  const [allUser , setAllUser] = useState(userData);
  const [products , setProduts] = useState(productsData)
  const [cart , setCart] = useState([])
  const [search,setSearch] = useState("")
  const [userName, setUserName] = useState('');
  const [editValue,setEditValue] = useState ()
  const [userCart,setUserCart] = useState([])

  const obj = {
    userName, 
    setUserName,
    intialValues,
    formValue,
    setFormValue,
    allUser,
    setAllUser,
    products,
    setProduts,
    cart,
    setCart,
    search,
    setSearch,
    editValue,
    setEditValue,
    userCart,
    setUserCart
  }
  return (
    <div className="App">
      <myContext.Provider value={obj}>
     <Routes>
         <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Main />} />
            <Route path='/dog' element={<Dog/>}/>
            <Route path='/cat' element={<Cat/>}/>
            <Route path='/allcollection' element={<AllCollection/>}/>
          </Route>
        <Route path='/registration' element={<UserRegistration/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
       {/* <Route path='/admin-home' element={<AdminHome/>}> */}
          <Route path='/admin-home' element={<AdminHomeMain />} />
          <Route path='/admin-user' element={<AdminUsers />} />
          <Route path='/admin-product' element={<AdminProduct />} />
          <Route path='/edit-product' element={<EditAdminProduct/>}/>
          <Route path='/add-product' element={<AdminAddproduct/>}/>
      </Routes>
      </myContext.Provider>
    </div> 
  );
}
export default App;
