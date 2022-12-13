import '../assets/css/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Carrito from '../components/Carrito';
import Tienda from '../components/Tienda'
import Home from '../components/Home'
import Nosotros from '../components/Nosotros'
function App() {
  return (
    <div className="App AppBg">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Carrito' element={<Carrito/>}></Route>
          <Route path='/Nosotros' element={<Nosotros/>}></Route>
          <Route path='/Tienda' element={<Tienda/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
