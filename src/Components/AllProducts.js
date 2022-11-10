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
    <div className=' grid grid-rows-4 grid-flow-col gap-7 h-fit ml-5 mr-5'>
        {displayProducts}
    </div>
    </>

  )
}

export default AllProducts 