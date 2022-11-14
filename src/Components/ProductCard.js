import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/products/${product.id}`);

  return (
    <section className='border border-violet-600 bg-gray-800/90 text-slate-200/100"'>
        <img src={product.img_url} alt="product appearance" style={{width: '100%', height: '65%'}} />
        <article className='px-6 py-4'>
          <h2 className="text-violet-600/100 text-2xl font-bold">{product.product_name}</h2>
          <p className='text-slate-200/100'>{product.description}</p>
          <article className="productPrice">
              <span className="text-slate-400/100 text-2xl text-center font-bold  border-gray-800 bg-violet-600/80 p-2 my-2 rounded-md">Ksh: {product.price}</span>
              <button onClick={handleNavigation} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show more</button>
          </article>
        </article>        
    </section>
  )
}

export default ProductCard