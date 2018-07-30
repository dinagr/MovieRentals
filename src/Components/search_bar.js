import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSearch } from "../actions/index";
import '../styles/search_bar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        localStorage.setItem("lastSearch", this.state.search);
        this.props.fetchSearch(this.state.search);
        //this.setState({ search: "" });
      }

    
    
    render() {
        
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Search movies by movie name, directory, gernre or year"
                    className="form-control"
                    value={this.state.search}
                    onChange={this.onInputChange}
                    />
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSearch }, dispatch);
  }
  
  export default connect(null, mapDispatchToProps)(SearchBar);

