import axios from "axios";
import { LOGIN, LOGIN_FAILURE, FETCH_SEARCH, FETCH_SEARCH_FAILURE, RETURN_MOVIE, RETURN_MOVIE_FAILURE, RENT_MOVIE ,RENT_MOVIE_FAILURE} from "../actions/types";

const ROOT_URL = `http://localhost:52834/api/`;

export const login = (userId, password) => dispatch => {
    
  axios.get(`${ROOT_URL}login/${userId}/${password}`)
    .then(response => dispatch({
        type: LOGIN,
        payload: response.data
    }))
    .then(() => axios.get(`${ROOT_URL}MoviesApi/last`)
      .then(response => dispatch({
        type: FETCH_SEARCH,
        payload: response.data
      }))
      .catch(error => {
        console.log('ERROR', error);
        dispatch({type: LOGIN_FAILURE, payload: error});
      })
    ) 
    .catch(error => {
      dispatch({type: LOGIN_FAILURE, payload: error});
    });
  }

export const fetchSearch = (search) => dispatch => {
  if (search) {
    axios.get(`${ROOT_URL}MoviesApi/${search}`)
    .then(response => dispatch({
      type: FETCH_SEARCH,
      payload: response.data
    }))
    .catch(error => {
      console.log('ERROR', error);
      dispatch({type: FETCH_SEARCH_FAILURE, payload: error});
    });
  }
  else{
    axios.get(`${ROOT_URL}MoviesApi`)
    .then(response => dispatch({
      type: FETCH_SEARCH,
      payload: response.data
    }))
    .catch(error => {
      console.log('ERROR', error);
      dispatch({type: FETCH_SEARCH_FAILURE, payload: error});
    });
  }
}

export const returnMovie = (userId, movieRentalId) => dispatch => {

    axios.post(`${ROOT_URL}MoviesApi/return/${userId}/${movieRentalId}`)
      .then(response => dispatch({
        type: RETURN_MOVIE,
        payload: response.data
      }))
      .then(() => {
        var search = localStorage.getItem("lastSearch" || "");
        if (search) {
          axios.get(`${ROOT_URL}MoviesApi/${search}`)
          .then(response => dispatch({
            type: FETCH_SEARCH,
            payload: response.data
          }))
          .catch(error => {
            console.log('ERROR', error);
            dispatch({type: FETCH_SEARCH_FAILURE, payload: error});
          });
        }
        else{
          axios.get(`${ROOT_URL}MoviesApi`)
          .then(response => dispatch({
            type: FETCH_SEARCH,
            payload: response.data
          }))
          .catch(error => {
            console.log('ERROR', error);
            dispatch({type: FETCH_SEARCH_FAILURE, payload: error});
          });
        }
      })
      .catch(error => {
         console.log('ERROR', error);
         dispatch({type: RETURN_MOVIE_FAILURE, payload: error});
      });

}

export const rentMovie = (userId, movieId) => dispatch => {

  axios.post(`${ROOT_URL}MoviesApi/rent/${userId}/${movieId}`)
    .then(response => dispatch({
      type: RENT_MOVIE,
      payload: response.data
    }))
    .then(() => {
      var search = localStorage.getItem("lastSearch" || "");
      if (search) {
        axios.get(`${ROOT_URL}MoviesApi/${search}`)
        .then(response => dispatch({
          type: FETCH_SEARCH,
          payload: response.data
        }))
        .catch(error => {
          console.log('ERROR', error);
          dispatch({type: FETCH_SEARCH_FAILURE, payload: error});
        });
      }
      else{
        axios.get(`${ROOT_URL}MoviesApi`)
        .then(response => dispatch({
          type: FETCH_SEARCH,
          payload: response.data
        }))
        .catch(error => {
          console.log('ERROR', error);
          dispatch({type: FETCH_SEARCH_FAILURE, payload: error});
        });
      }
    })
    .catch(error => {
       console.log('ERROR', error);
       dispatch({type: RENT_MOVIE_FAILURE, payload: error});
    });


}

