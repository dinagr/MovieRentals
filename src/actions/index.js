import axios from "axios";

const ROOT_URL = `http://localhost:52834/api/`;

export const FETCH_SEARCH = "FETCH_SEARCH";

export function fetchSearch(search) {
    
  const url = ROOT_URL + `MoviesApi`;
  const request = axios.get(url);


  return {
    type: FETCH_SEARCH,
    payload: request
  };
}