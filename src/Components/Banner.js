import React, { Component } from 'react'
import { movies  } from "./getMovies";

export default class Banner extends Component {
    constructor() {
        super()
    }
    render() {
        let movie = movies.results[0]
        console.log(movie)
        return (
            <>
                {
                    movie == '' ?
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> :
                        <div>
                            <div className="card banner-card" >
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt="..." />
                                <div className="card-body">
                                    <h1 className="card-title banner-title">{movie.original_title}</h1>
                                    <p className="card-text banner-text">{movie.overview}</p>
                                    
                                </div>
                            </div>
                        </div>
                }
            </>
        )
    }
}
