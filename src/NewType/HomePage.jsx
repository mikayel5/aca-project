import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Subcontent from './Subcontent';
import Genre from '../HomePage/Genre';

export default class HomePage extends Component {
  render() {
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
        <Subcontent placeholdervalue="Search song by artist" activecontent="artist" />
    )
}

function SongSearch() {
    return (
        <Subcontent placeholdervalue="Search song by song name" activecontent="song"/>
    )
}

function GenreSearch() {
    return (
        <Genre/>
    )
}