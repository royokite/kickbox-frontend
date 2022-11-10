import React, { useEffect, useState } from 'react'
import Products from '../Components/Products';
// import Search from '../Components/Search';

const Products = () => {
const [productsList, setProductsList] = useState([]);
// const [search, setSearch] = useState('');


useEffect(()=> {
  fetch("https://fierce-ridge-31455.herokuapp.com/products")
  .then(res => res.json())
  .then(products => setProductsList(products))
  //console.log(productsList);
  .catch(err => console.log(err))
}, [])

// const visibleProducts = productsList.filter(product=>{
//   return product.title.toLowerCase().includes(search.toLowerCase())
// })
  return (
    <>
    {/* <Search setSearch={setSearch} search={search} /> */}

    <ProductCollection products={productsList} />
    </>
  )
}

export default Products;