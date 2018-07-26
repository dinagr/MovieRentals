import React from 'react';

const SearchResult = ({result}) => {
    return (
        <li className="media">
            <img className="mr-3" src={result.ImageUrll} alt={result.MovieName}/>
            <div className="media-body">
            <h5 className="mt-0 mb-1">{result.MovieName} {result.Year} {result.Director}</h5>
                {result.Description}
            </div>
        </li>
    );
};

export default SearchResult;