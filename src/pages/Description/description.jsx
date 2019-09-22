import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { Header, SlideBar, Ratings} from '../../Components'
import { moviesList } from '../MoviesList/fixture'
import './styles.css'

@observer
class Description extends React.Component {
    @observable shouldViewRatings = false
    renderDescription = movieData => {
        const descriptionView = (
            <div className="movie-details">
                <div className="movie-name"> {movieData.name} </div>
                <div className="movie-release-details">
                    <div className="movie-year"> {movieData.year} </div>
                    .
                    <div className="movie-genre"> {movieData.genre} </div>
                    .
                    <div className="movie-duration"> {movieData.duration} </div>
                </div>
                <div className="movie-director"> Directed By: {movieData.director} </div>
                <p className="movie-description"> {movieData.description} </p>
            </div>
        )
        return descriptionView
    }

    handleViewRatings = event => {
        event.preventDefault()
        this.shouldViewRatings = !this.shouldViewRatings
    }

    render() {
        const history = this.props.history
        const name = decodeURI(history.location.search.replace("?movie=", ""))
        const movieData = moviesList.find(movie => {
            if( movie.name === name ) {
                return true
            }
        })
        return(
            <div className="description-page">
                <Header />
                <SlideBar slideImages={movieData.additionalImages} />
                {this.renderDescription(movieData)}
                <button className="view-ratings" onClick={this.handleViewRatings}> View Ratings </button>
                {this.shouldViewRatings && <Ratings />}
            </div>
        )
    }
}

export { Description }
export default Description