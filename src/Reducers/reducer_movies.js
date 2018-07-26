import { FETCH_SEARCH } from "../actions/index";

export default function(state=[] ,action) {
    debugger;
    console.log("action " + action);
    switch(action.type)
    {
        case FETCH_SEARCH:
        {
            console.log("fetch_search in reducer");
            console.log("payload " + action.payload);
            return [action.payload.data];
        }
            
        default:
            break;
    }

    return state;    
    
}
