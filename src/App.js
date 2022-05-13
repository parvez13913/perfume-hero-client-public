import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddItems from './AddItems/AddItems';
import './App.css';
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/Home/InventoryDetail/InventoryDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/manage' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
