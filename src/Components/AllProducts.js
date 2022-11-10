import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = ({products}) => {

  const displayProducts = products.map(product => {
    return (
      <>
      <ProductCard key={product.id} product={product}/>
      </>
    )
  })

  return (
    <>
    <div>
    </div>
    <div className='allProducts'>
        {displayProducts}
    </div>
    </>

  )
}

export default AllProducts 