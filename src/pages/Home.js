import React from "react";
import Gallery from "../Components/Gallery";

const Home = () => {
    return (
        <section className="m-5 text-sky-200 ">
            <article className="grid place-items-center">
                <h3 className="text-slate-400/100 text-3xl text-center font-bold  border-gray-800 bg-violet-600/80 py-3 w-1/2 rounded-md">Kick it with KICKBOX!</h3> <br />
            </article> <br />
            <article>
                <Gallery />   
            </article> <br />
        </section>      

    )
}

export default Home;