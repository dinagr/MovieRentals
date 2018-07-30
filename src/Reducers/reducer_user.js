import { LOGIN, RENT_MOVIE, RETURN_MOVIE } from "../actions/types";

const initialState = {
    user: {},
    movies: []
}

export default function(state=initialState ,action) {

    switch(action.type)
    {
        case LOGIN:
        {
            return {
                ...state,
                user: action.payload,
                errorMessage: ""
            }
        }

        case RETURN_MOVIE:
        {
            localStorage.setItem("movieRentalId", null);
            return {
                ...state,
                user: action.payload,
                errorMessage: ""
                }
        }

        case RENT_MOVIE:
        {
            localStorage.setItem("movieRentalId", action.payload.MovieRentalId);
            return {
                ...state,
                user: action.payload,
                errorMessage: ""
            }
        }
            
        default:
            return state;
    }

}
