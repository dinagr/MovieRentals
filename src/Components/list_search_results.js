import React, { Component } from 'react';
import  SearchResult  from './search_result';
import '../styles/list_search_result.css';

class ListSearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies
        };
        
        this.searchItems = '';
    }

    render() {
        var numOfMovies = 0;
        if (this.props.movies && this.props.movies.movies) {
            numOfMovies = this.props.movies.movies.length;
            this.searchItems = this.props.movies.movies.map((result) => {
                return <SearchResult key={result.MovieId} 
                                    result={result} 
                                    userId={this.props.userId} 
                                    numOfMovies = {numOfMovies} 
                                    hasRentedMovies = {this.props.hasRentedMovies}
                                    movieName = {this.props.movieName} 
                                    movieId = {this.props.movieId} />
            });
        }
        else {
            this.searchItems = <div>The are no matching movies to your search</div>;
        }
        return (
            <div className={numOfMovies > 1  ? 'card-columns' : 'card-columns one-card-center'}>
                {this.searchItems}
            </div>
        );
    }
}

  

  
export default ListSearchResults;

