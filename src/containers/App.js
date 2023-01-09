import { CartContextProvider } from "../context/CartContex"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../assets/css/App.css';
import Carrito from '../components/Carrito';
import Home from '../components/Home';
import ItemDetailContainer from '../components/ItemDetailContainer';


function App() {
  return (
    
    <div className="App AppBg">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />  
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Carrito' element={<Carrito/>}></Route>
            <Route path='/Category/:idCategory' element={<Home></Home>}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>  
                    
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;
