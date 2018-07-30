import React, { Component } from 'react';
import {rentMovie} from '../actions/index';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import '../styles/search_result.css';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.rentMovie = this.rentMovie.bind(this)
    }

    rentMovie() {
        this.props.rentMovie(this.props.userId, this.props.result.MovieId);
      }

    render() {

        return (
            <div className={this.props.numOfMovies > 1 ? 'card' : 'card one-card-minimize'}>
                <img className="card-img-top" src={this.props.result.ImageUrl} alt={this.props.result.MovieName}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.result.MovieName}</h5>
                    <p className="card-text"> {this.props.result.Description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{this.props.result.Director} {this.props.result.Year} {this.props.result.Genre}</small>
                    <div>                        
                       {this.props.result.RentalStatus  ?  
                            (this.props.result.MovieId == this.props.movieId ? 
                            <span className="text-success font-weight-bold">Rented by you</span> : 
                            <span className="text-danger font-weight-bold">Unavailble</span>) :  
                            (this.props.hasRentedMovies ? <span className="text-secondary font-weight-bold">Return movie before renting a new one</span> :
                            <button type="button" className="btn btn-info mt-2" onClick={this.rentMovie}>Rent Movie</button>)
                         }
                    </div>
                </div>
            </div>
        
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ rentMovie }, dispatch);
}

  
export default connect(null, mapDispatchToProps)(SearchResult);
