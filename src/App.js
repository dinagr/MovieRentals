import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

import  SearchBar  from './Components/search_bar';
import UserLogin from './Components/user_login';
import ListSearchResults from './Components/list_search_results';
import {returnMovie} from './actions/index';
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.returnMovie = this.returnMovie.bind(this)
  }

  returnMovie() {
    this.props.returnMovie(this.props.user.user.UserId, this.props.user.user.MovieRentalId);
  }

  render() {
    var userId , movieRentalId , fullName , movieName , movieId = '';
    if(this.props.user && this.props.user.user) {
      userId = this.props.user.user.UserId;
      movieRentalId = this.props.user.user.MovieRentalId;
      fullName = this.props.user.user.FullName;
      movieName = this.props.user.user.MovieName;
      movieId = this.props.user.user.MovieId;
    }

    return (
      <div className={userId ? 'App' : 'App flex-center'}>
        
        {(userId) ?
        <div>
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{fullName}</span>
              {movieRentalId  ?
              <div>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.returnMovie}>Return Movie <strong>{movieName}</strong></button> 
              </div>
              : <span className="mb-0 font-weight-light h4">You can start renting movies!</span> }  
          </nav>
          <SearchBar />
          <ListSearchResults movies= {this.props.movies} userId = {userId} movieName = {movieName} movieId = {movieId} hasRentedMovies = {movieRentalId} /> 
        </div> :
         
        <UserLogin errorMessage={this.props.errorMessage}/>  
          
        }  
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  user: state.user,
  movies: state.movies,
  errorMessage: state.message
})


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ returnMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




