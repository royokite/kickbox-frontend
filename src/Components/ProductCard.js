import React from 'react';

const ProductCard = ({product}) => {

  return (
    <>
    <div className='productCard'>
      <img src={product.img_url} alt="" className='h-40 max-w-none mt-10' />
      {/* <img className='w-full border-4 mt-2 h-64 pr-48' src={product.image} alt={product.title}/> */}

      <div className='px-6 py-4'>
        <div className='font-bold  text-sm '>
          {product.product_name}
        </div>
        <div class="productPrice">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
            <a href="/reviews" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show more...</a>
        </div>
      </div>
    </div>
    </>

  )
}

export default ProductCard


