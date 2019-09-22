import React from 'react'
import {
    tvIcon
} from '../../assets'
import './styles.css'

class Header extends React.Component {
    render() {
        return(
            <div className="movie-header">
                <img className="my-movie-icon" src={tvIcon} height={'80px'} width={'80px'} />
                <h2 className="my-movie-title">MY MOVIES</h2>
            </div>     
        )
    }
}

export { Header }
export default Header