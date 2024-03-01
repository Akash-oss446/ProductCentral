
import './App.css';
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Display from './Display';
import Home from './Home';
function App() { 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/display' element={<Display />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='display/editProduct/:id' element={<EditProduct />}></Route>
      </Routes>
    </div>
  );
}
export default App;
