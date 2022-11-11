import React from "react";

const EachReview = ({ review, setProductsList }) => {

    function handleDelete(event) {
        fetch(`http://localhost:9393/reviews/${review.id}`,{
          method: "DELETE"
        })
        
        event.target.parentNode.parentNode.remove()
      }
    
      function handleEdit() {
          console.log("edited!")
      }

    return (
        <section className="border m-2 rounded-md p-3">
            <article className="flex">
                <span className="text-slate-400/100 text-xl text-center font-bold  border-gray-800 bg-violet-600/80 mx-3 p-2 w-10 h-10 rounded-full">{review.rating}</span>            
                <p className="italic">{review.comment}</p>
            </article>
            <article className="flex">
                <button 
                    onClick={handleEdit} 
                    className="bg-slate-700 m-2 p-2 rounded-md hover:bg-sky-500 col-start-1 text-slate-200 disabled:opacity-0 " 
                    style={{width: "100%"}}
                > Edit                    
                </button>
                <button 
                    onClick={handleDelete} 
                    className="bg-amber-800 m-2 p-2 rounded-md hover:bg-red-500 col-end-5 text-slate-200 disabled:opacity-0" 
                    style={{width: "100%"}}
                >Delete
                </button>
            </article>
        </section>
    )
}

export default EachReview;