import {combineReducers} from 'redux';
import MoviesReducer from './reducer_movies';
import UserReducer from './reducer_user';
import ErrorMessageReducer from './error_message_reducer';

const rootReducer = combineReducers({
    movies: MoviesReducer,
    user: UserReducer,
    errorMessage: ErrorMessageReducer
});

export default rootReducer;


