import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = ({products,reviews}) => {

  const displayProducts = products.map(product => {
    return (
      <>
      <ProductCard key={product.id} product={product}/>
      </>
    )
  })

  return (
    <section className="m-10">
      <h1 className="text-violet-600/100 text-3xl text-center font-bold  border-gray-800 bg-gray-800/90 py-3 mb-3">Sneakers List</h1>
      <article className='grid gap-4 grid-cols-4 m-6'>
          {displayProducts}
      </article>
    </section>

  )
}

export default AllProducts 