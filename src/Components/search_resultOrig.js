
import React from 'react';
//import './search_result.css';

const SearchResult = ({result}) => {
    return (
        <div className="row">
            <div className="col-sm">
                <div className="card">
                    <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Nature" className="image-result"/>
                    <div className="card-container">
                        <h3><b>TITLE HEADING</b></h3>
                        <h5>Title description, <span className="year-opacity">April 7, 2014</span></h5>
                    </div>
                    <div className="card-container">
                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        <div className="rent-button-container">
                            <button className="rent-button">Rented</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;