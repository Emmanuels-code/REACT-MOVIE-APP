import React from 'react'

function MovieDisplay({movie}) {
    const loaded = () => {
        return (
            <>
            <div className='title'>
                {movie.Title}
            </div>

            <div className='poster'>
                <img src={movie.Poster}></img>
            </div>

            <div className='info'>
                Genre: {movie.Genre}<hr/>
                Year: {movie.Year}<hr/>
                Awards: {movie.Awards}<hr/>
                Plot: {movie.Plot}<hr/>
            </div>
        </>
        );
    };
    //function to return loading JSX
    const loading = () => {
        return <h1>Search for movie</h1>
    };

    return movie ? loaded() : loading();
}

export default MovieDisplay