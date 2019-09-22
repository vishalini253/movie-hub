import React from 'react'
import {
    moviesList
} from './fixture'
import { Header } from '../../Components'
import './styles.css'

class MoviesListPage extends React.Component {
    renderMovieList = () => {
        const moviesListView = moviesList.map(movie => {
            return (
                <a className="movie-data-nav" href={`/description?movie=${movie.name}`} >
                    <div className="image-wrapper">
                        <img src={movie.img} className="movie-image" />
                    </div>
                    <div className="movie-data">
                        <div className="list-movie-name"> {movie.name} </div>
                        <div className="movie-certification-wrapper">
                            <div className="list-movie-certification"> {movie.certificate} </div> 
                            <div className="list-movie-language"> {movie.language} </div>
                        </div>
                    </div>
                </a>
            )
        })
        return moviesListView
    }

    render() {
        return (
            <div className="movies-list-page">
                <Header />
                <div className="movies-list-wrapper">
                    {this.renderMovieList()}
                </div>
            </div>
        )
    }
}

export { MoviesListPage }
export default MoviesListPage
