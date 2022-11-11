import React, { useEffect, useState } from 'react';
import AllProducts from '../Components/AllProducts';
 import Search from '../Components/Search';

const Products = () => {
const [productsList, setProductsList] = useState([]);
const [search, setSearch] = useState('');


useEffect(()=> {
  fetch("http://localhost:9292/products")
  .then(res => res.json())
  .then(products => setProductsList(products))

  .catch(err => console.log(err))
}, [])

const visibleProducts = productsList.filter(product=>{
  return product.product_name.toLowerCase().includes(search.toLowerCase())
 })

  return (
    <>
    <Search setSearch={setSearch} search={search} /> 

    <AllProducts products={visibleProducts}/>
    </>
  )
}

export default Products;