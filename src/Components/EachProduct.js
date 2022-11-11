import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EachReview from './EachReview';

const EachProduct = ({ productsList }) => {

  const [ comment, setComment] = useState("")
  const [ rating, setRating] = useState(1)

  const navigate = useNavigate()
  const { id } = useParams()
  const shoe = productsList.find(shoe => shoe.id === Number(id))

  const renderReviews = shoe.reviews.map((review) => <EachReview key={review.id} review={review} />)

  function handleAdd(event) {
    event.preventDefault()

    const userReview = { rating, comment }
     
    fetch(`http://localhost:9393/reviews`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify(userReview)
        })
    setComment("")
    setRating(1)
        
    alert("Product Reviewed!")
  }

  return (
    <section className='border border-violet-600 bg-gray-800/90 text-slate-200/100 flex m-10'>
      <img src={shoe.img_url} alt="product appearance" style={{width: '50%'}} />
      <article className='px-6 py-4 m-10'>
        <button onClick={() => navigate("/products")} className="bg-sky-500 m-2 p-2 rounded-md hover:bg-blue-800 col-start-1 text-slate-200 disabled:opacity-0 " >Go back</button>
        <h2 className="text-violet-600/100 text-2xl font-bold">{shoe.product_name}</h2>
        <p className='text-slate-200/100 my-2'>{shoe.description}</p>
        <span className="text-slate-400/100 text-2xl text-center font-bold  border-gray-800 bg-violet-600/80 p-2 my-2 rounded-md">Ksh: {shoe.price}</span> <br/> <br/>
        <article>
          <form onSubmit={handleAdd} className="border border-violet-600 bg-gray-800/90 text-slate-200/100 p-3">
            <label
                className="block uppercase tracking-wide text-violet-500 text-xs font-bold mb-2"
                htmlFor="grid-comment"
            > Comment
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                placeholder="Rating..."
                min="1" max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <button className="bg-sky-500 m-2 p-2 rounded-md hover:bg-lime-500 col-start-1 text-slate-200 disabled:opacity-0 " >Add Review</button>
          </form>
        </article>
        <article className='my-10'>    
          <h3 className='text-xl italic'>Reviews:</h3>
          {renderReviews}    
        </article>
      </article>
    </section>
  )
}

export default EachProduct;