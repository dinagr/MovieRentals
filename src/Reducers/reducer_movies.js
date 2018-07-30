import { FETCH_SEARCH, UPDATE_RENTED_MOVIE } from "../actions/types";

const initialState = {
    user: {},
    movies: []
}

export default function(state=initialState ,action) {

    switch(action.type)
    {
        case FETCH_SEARCH:
        {
            return {
                ...state,
                movies: action.payload,
                errorMessage: ""
            }
        }
        
        case UPDATE_RENTED_MOVIE:
        {
            return {
                ...state,
                movies: state.movies,
                errorMessage: ""
            }
        }

            
        default:
            return state;
    }

}
