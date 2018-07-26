import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';


import  SearchBar  from './Components/search_bar';
import UserLogin from './Components/user_login';
import ListSearchResults from './Components/list_search_results';

//const api = 'http://localhost:52834/api/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'yy',
      moviesOrig: [],
      movies: []
    };
    
  }

  componentDidMount(){
    // axios.get(api + 'MoviesApi')
    //   .then(response => {
    //     console.log("got movies again");
    //     this.setState({moviesOrig: response.data, movies: response.data});
    //   })
  }


  PerformSearch(movieName, director, genre, year) {
    var Filteredmovies = this.state.moviesOrig.filter(function (obj) { 
      return (obj.MovieName === movieName) && (obj.Director === director) && (obj.genre === genre) && (obj.Year === year); 
    });

    //objArray.find(function (obj) { return obj.id === 3; });

    console.log("Filteredmovies  " + Filteredmovies);
    this.setState({movies: Filteredmovies});
  }

  
  

  render() {
    return (
      <div className="App">
        {this.state.user ?
        <div>
        <SearchBar />
        <ListSearchResults /> 
          
        </div>:
        <UserLogin OnLogin={user => this.setState({user})}/>  
          
        }  
      </div>
    );
  }
}

export default App;


