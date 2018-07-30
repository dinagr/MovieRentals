import { LOGIN_FAILURE, FETCH_SEARCH_FAILURE, RETURN_MOVIE_FAILURE, RENT_MOVIE_FAILURE } from "../actions/types";

const initialState = {
    user: {},
    movies: [],
    errorMessage: ""
}

export default function(state=initialState ,action) {

    switch(action.type)
    {

       case LOGIN_FAILURE:
        {
            debugger;
            return {
                ...state,
                errorMessage: "Please verify that you have entered correct userId and password"
            }
        }

        case FETCH_SEARCH_FAILURE:
        {
            localStorage.setItem("movieRentalId", null);
            return {
                ...state,
                errorMessage: "An error occurred while trying to perform the search. Please try again Later"
                }
        }

        case RETURN_MOVIE_FAILURE:
        {
            localStorage.setItem("movieRentalId", action.payload.MovieRentalId);
            return {
                ...state,
                errorMessage: "An error occurred while trying to return the movie. Please try again Later"
            }
        }

        case RENT_MOVIE_FAILURE:
        {
            localStorage.setItem("movieRentalId", action.payload.MovieRentalId);
            return {
                ...state,
                errorMessage: "An error occurred while trying to rent the movie. Please try again Later"
            }
        }
            
        default:
            return state;
    }

}
