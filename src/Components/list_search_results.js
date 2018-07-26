import React from 'react';
import  SearchResult  from './search_result';
import { connect } from 'react-redux';
//import {rentMovie} from '../actions/index';
//import { bindActionCreators } from 'redux';

const ListSearchResults = props => {

    if (props.movies.length === 0){
        return (<div>The are no matching movies to your search</div>);
    }
    //debugger;
    const searchItems = props.movies.map((result) => {
        return <SearchResult key={result.MovieId} result={result}/>
    });

    return (
        <ul className="col-md-12 list-group">
            {searchItems}
        </ul>
    );
    
} 

function mapStateToProps({movies}) {
    return {
      movies
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({doSearch: doSearch}, dispatch)
// }

export default connect(mapStateToProps)(ListSearchResults);