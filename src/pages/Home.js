import React from "react";
import Gallery from "../Components/Gallery";

const Home = () => {
    return (
        <section className="m-5 text-sky-200">
            <article>
                <h3 className="text-violet-600/100 text-3xl">Kick it with KICKBOX!</h3> <br />
            </article> <br />
            <article>
                <Gallery />   
            </article> <br />
        </section>      

    )
}

export default Home;