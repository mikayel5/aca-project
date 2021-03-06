import React, {Component} from 'react';
import './css/Header.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Genre from './Genre';
import SearchByArtist from './SearchByArtist';
import SearchBySong from './SearchBySong';

class Content extends Component {

    render () {
        return (
            <div className="main">
                    <Router>
                        <div className="tabs">
                            <NavLink to="/artist" className="link artist" activeClassName="active">
                                <button>About Artist
                                </button>
                            </NavLink> 
                            <NavLink to="/song" className="link song" activeClassName="active">
                                <button>
                                    Song Name
                                </button>
                            </NavLink>
                            <NavLink to="/genre" className="link genre" activeClassName="active">
                                <button>Genres</button>
                            </NavLink>
                        </div>
                        <Route path="/artist" component={ArtistSearch} />
                        <Route path="/song" component={SongSearch} />
                        <Route path="/genre" component={GenreSearch} />
                    </Router>
            </div>
        )
    }

}

function ArtistSearch() {
    return (
        <SearchByArtist placeholdervalue="Search song by artist"/>
    )
}

function SongSearch() {
    return (
        <SearchBySong placeholdervalue="Search song by song name"/>
    )
}

function GenreSearch() {
    return (
        <Genre/>
    )
}

export default Content;