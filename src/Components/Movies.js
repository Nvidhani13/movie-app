import { movies } from "./getMovies";
import React, { Component } from 'react'
import axios from 'axios'

export default class Movies extends Component {
    constructor() {
        super()
        this.state = {
            hover: true,
            parr: [1],
            currPage: 1,
            movies: []
        }
    }
    fetchMovies = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=63cab78a8a739a0882903f2963f82adc&language=en-US&page=${this.state.currPage}`)
        this.setState({
            movies: [...res.data.results]
        })
    }
    componentDidMount = () => {
        this.fetchMovies()
    }

    handleNext = () => {
        if (this.state.currPage === this.state.parr[this.state.parr.length - 1]) {
            console.log("movies ")
            this.setState({
                currPage: this.state.currPage + 1,
                parr: [...this.state.parr, this.state.currPage + 1]
            });
        }
        else {
            this.setState({
                currPage: this.state.currPage + 1
            });
        }
        this.fetchMovies();
    }
    handlePrevious = () => {
        if (this.state.currPage != 1) {
            this.setState({
                currPage: this.state.currPage - 1,
            }, this.fetchMovies)
        }
    }

   handleClick=(value)=>{
    if(value!=this.state.currPage){
       
        this.setState({
            currPage:value
        },this.fetchMovies)
    }
   }
    render() {


        console.log("render")
        return (
            <>{
                this.state.movies.length == 0 ?
                    <div className="spinner-border text-primary" role="status" >
                        <span className="sr-only">Loading...</span>
                    </div> :

                    <div>
                        <h3 className="text-center"><strong>Trending</strong></h3>
                        <div className="movies-list">
                            {
                                this.state.movies.map((movieObj, id) => (
                                    <div className="card movie-card" key={id} onMouseEnter={() => this.setState({ hover: movieObj.id })} onMouseLeave={() => this.setState({ hover: -1 })}>
                                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movie-img" alt="..." />

                                        <h5 className="card-title movie-title">{movieObj.original_title}</h5>
                                        <div className="button-wrapper">
                                            {

                                                this.state.hover == movieObj.id && <a className="btn btn-primary movies-button">Add to favourites</a>
                                            }
                                        </div>


                                    </div>
                                ))
                            }
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item" key={0}><a className="page-link" href="#" onClick={this.handlePrevious}>Previous</a></li>
                                    {this.state.parr.map((value, id) => (
                                        <li className="page-item" key={id + 1}><a className="page-link" href="#" onClick={() => this.handleClick(value)}>{value}</a></li>

                                    ))}

                                    <li className="page-item" key={this.state.parr.length + 2}><a className="page-link" href="#" onClick={this.handleNext}>Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            }
            </>
        )
    }
}
