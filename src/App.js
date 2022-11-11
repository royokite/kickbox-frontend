import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Product";
import Footer from "./Components/Footer";
import EachProduct from "./Components/EachProduct"


function App() {
  const [productsList, setProductsList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=> {
    fetch("http://localhost:9393/products")
    .then(res => res.json())
    .then(products => setProductsList(products))
  
    .catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <section>      
          <NavBar />
          <Routes>
            <Route exact path="/products" element={<Products productsList={productsList} search={search} setSearch={setSearch}/>} />
            <Route exact path="/products/:id" element={<EachProduct productsList={productsList} setProductsList={setProductsList}/>} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<h1 className="text-violet-600/100 text-5xl">404 Not Found!</h1>} />
          </Routes>
          <Footer />
      </section>
    </BrowserRouter>
   );
}

export default App;
