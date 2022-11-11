import React from 'react';

const ProductCard = ({product}) => {

  return (
    <section className='border border-violet-600 bg-gray-800/90 text-slate-200/100"'>
      <img src={product.img_url} alt="product image" style={{width: '100%'}} />
      {/* <img className='w-full border-4 mt-2 h-64 pr-48' src={product.image} alt={product.title}/> */}

      <article className='px-6 py-4'>
        <h2 className="text-violet-600/100 text-2xl font-bold">{product.product_name}</h2>
        {/* <article className='font-bold  text-sm '>
          {product.product_name}
        </article> */}
        <p className='text-slate-200/100'>{product.description}</p>


        <article className="productPrice">
            <span className="text-slate-400/100 text-2xl text-center font-bold  border-gray-800 bg-violet-600/80 p-2 my-2 rounded-md">Ksh: {product.price}</span>
            <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </article>
      </article>
    </section>
  )
//   return (
//     <article className="border-double border-4 border-lime-400 bg-gray-800 rounded-lg p-2 text-sky-200">
//         <img src={product.img_url} alt="character appearance" style={{width: '100%'}}/>
//         <h2 className="text-lime-400/100 text-2xl">{product.product_name}</h2>
//         <p>
//             <span className="text-lime-400/100">Price: </span> {product.price} <br />
//         </p>
//     </article>
// )
}

export default ProductCard


