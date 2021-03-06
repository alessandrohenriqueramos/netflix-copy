import React from 'react'

import Featured from './Featured/index'
import Movie from './Movie/index';
import Footer from '../../../../../components/Footer/index';

import './style.css';

const BrowsePage = ({featuredData, movieList}) => {

    //header

    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredData.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return(
        <div className="browsePage">
            <header style={backgroundStyle} className="browsePage-Header">
                <Featured featuredData={featuredData} movie />
            </header>
            <section className="browsePage-Section">
                <Movie movieList={movieList} />
            </section>
            <Footer />
        </div>
    );
}

export default BrowsePage;