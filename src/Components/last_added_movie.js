import React, {Component} from 'react';
import  './last_added_movie.css';

class LastAddedMovie extends Component {
    render() {
        return (
            <div className="movie-container">
                <img src={require("../images/bigSick.jpg")} alt="The Big Sick" className="movie-img"/>
                <div>
                    <h1>The Big Sick</h1>
                    <h2>Year 2017</h2>
                    <h2>Director Name </h2>
                    <p>This movie is about bla bla bla bla</p>
                </div>
            </div>
        );
    }
}

export default LastAddedMovie;