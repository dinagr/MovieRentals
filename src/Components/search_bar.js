import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSearch } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            director: '',
            year: '',
            genre: '',
            search: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ search: event.target.value });
      }
    
    onFormSubmit(event) {
        event.preventDefault();
        console.log("on submit");
        // We need to go and fetch weather data
        this.props.fetchSearch(this.state.search);
        this.setState({ search: "" });
      }

    // handleChange(event) {
    //     switch(event.target.id){
    //         case("movieName"):
    //             this.setState({movieName: event.target.value});
    //             break;
    //         case("director"):
    //             this.setState({director: event.target.value});
    //             break;
    //         case("genre"):
    //             this.setState({genre: event.target.value});
    //             break;
    //         case("year"):
    //             this.setState({year: event.target.value});
    //             break;
    //         default:
    //             break;
    //     }        
      
    // }

    // handleSubmit(event) {
    //     this.props.OnSearch(this.state.movieName, this.state.director, this.state.genre, this.state.year);
    // }
    
    
    render() {
        // return (
        //     <div>
        //         <form onSubmit={this.handleSubmit} >
        //             <input type="text" value={this.state.movieName} onChange={this.handleChange} className="form-control" placeholder="Movie Name" id="movieName"/>
        //             <input type="text" value={this.state.director} onChange={this.handleChange} className="form-control" placeholder="Director" id="director"/>
        //             <input type="text" value={this.state.genre} onChange={this.handleChange} className="form-control" placeholder="Genre" id="genre"/>
        //             <input type="text" value={this.state.year} onChange={this.handleChange} className="form-control" placeholder="Year" id="year"/>
        //             <button type="submit" className="btn btn-success">Submit</button>
        //         </form>
        //     </div>
        // ) ;

        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Search movies by movie name, directory, gernre or year"
                    className="form-control"
                    value={this.state.search}
                    onChange={this.onInputChange}
                    />
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSearch }, dispatch);
  }
  
  export default connect(null, mapDispatchToProps)(SearchBar);

