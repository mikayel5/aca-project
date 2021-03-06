import React, {Component} from 'react';
import './css/Header.css';

class Subcontent extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
                <div className="searchField">
                    <div className="searchWrapper">
                        <input placeholder={this.props.placeholder} onChange={this.props.onchange} value={this.props.value}></input>
                        <button onClick={this.props.onclick}>Search</button>
                    </div>
                </div>
        )
    }
}


export default Subcontent;