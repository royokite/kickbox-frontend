import React from 'react';
import { useParams } from 'react-router-dom';
import EachReview from './EachReview';

const EachProduct = ({ productsList }) => {

  const { id } = useParams()
  const shoe = productsList.find(shoe => shoe.id === Number(id))

  const renderReviews = shoe.reviews.map((review) => <EachReview key={review.id} review={review} />)

return (
  <section className='border border-violet-600 bg-gray-800/90 text-slate-200/100 flex m-10'>
    <img src={shoe.img_url} alt="product appearance" style={{width: '50%'}} />
    <article className='px-6 py-4 m-10'>
      <h2 className="text-violet-600/100 text-2xl font-bold">{shoe.product_name}</h2>
      <p className='text-slate-200/100 my-2'>{shoe.description}</p>
      <span className="text-slate-400/100 text-2xl text-center font-bold  border-gray-800 bg-violet-600/80 p-2 my-2 rounded-md">Ksh: {shoe.price}</span>
      <article className='my-10'>    
        <h3 className='text-xl italic'>Rating:</h3>
        {renderReviews}    
      </article>
    </article>
  </section>
)
}

export default EachProduct;