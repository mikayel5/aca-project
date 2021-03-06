import React, {Component} from 'react';
import SubContent from './SubContent';
import SongContainer from './SongContainer';
import Block from '../Block';
import './css/Header.css';


class SearchBySong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: "",
            trackArray: [], 
            youtubeVideoID: null
        }
    }

    getInputValue = (event) => {
        this.setState({inputvalue: event.target.value})
    };

    closeYoutube = () => {
        this.setState({youtubeVideoID: null})
    }

    goYoutube = (searchText) => {
        console.log(searchText)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&order=relevance&q=${searchText}&key=AIzaSyDP7ztlVJ8pjrlFUaCsBMBtbjghLogw2fg`)
                .then(response => response.json())
                .then(myJson =>  {
                    this.setState({
                        youtubeVideoID: myJson.items[0].id.videoId
                    })
                }) 
    }

    searchBySong = () => {
        this.setState({trackArray: [],  youtubeVideoID: null})
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.inputvalue}&api_key=49edeb8bf7e07fe071335277a648f207&format=json`)
        .then(res => res.json())
        .then(myJson => 
            {
                const track = myJson.results.trackmatches.track; 
                this.setState({ trackArray: track })
            })
        .catch(err => alert(err))
    }

    render() {
        return (
            <> 
                <SubContent placeholder={this.props.placeholdervalue} onclick={this.searchBySong} onchange={this.getInputValue} value={this.state.inputvalue}/>
                <div className='song_container'>
                    {
                        this.state.trackArray.map((track, index) => <SongContainer
                                key={index}
                                songname={track.name}
                                artistname={track.artist}
                                searchYoutube={this.goYoutube}
                                artistimg={track.image[2]["#text"]}
                                />)
                    }
                </div>
                {
                    this.state.youtubeVideoID  &&  
                    <>
                        <div className="video-fixed"> 
                            <button onClick={this.closeYoutube}>X</button>
                            <Block url={`https://www.youtube.com/embed/${ this.state.youtubeVideoID }`}/>
                        </div>
                    </>
                }
            </>
        )
    }
}





export default SearchBySong;