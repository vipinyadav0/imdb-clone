import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"

function Header() {
    return (
        <div className='header'>
            <div className='header--left'>
                <Link to="/"><img className="header--icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /> </Link>
                <Link to={"/movies/popular"} >Popular</Link>
                <Link to={"/movies/top-rated"} >Top Rated</Link>
                <Link to={"/movies/upcoming"} className="header--left-last">Upcoming</Link>
                <Link to={"/signup"} ><span class="material-symbols-outlined user--icon">
                    account_circle
                </span>
                </Link>

            </div>
        </div>
    )
}

export default Header