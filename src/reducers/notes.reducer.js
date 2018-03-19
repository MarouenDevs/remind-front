import {ADD_NOTES, DELETE_NOTES, FETCH_NOTES} from "./contants/actions";
import {request as r} from "./http/http.reducer";
import {success as s} from "./http/http.reducer";
import {fail as f} from "./http/http.reducer";

export const request = r(FETCH_NOTES);
export const success = s(FETCH_NOTES);
export const fail = f(FETCH_NOTES);
export const removeRequest = r(DELETE_NOTES);
export const addRequest = r(ADD_NOTES);
export const addSuccess = s(ADD_NOTES);


export default function reducer(state = {fetching: false}, action) {


    switch (action.type) {
        case request().type: {
            return {...state, ...action.payload};
        }
        case success().type: {
            return {data: action.payload};
            break;
        }
        case fail().type: {
            return {...state, ...action.payload};
            break;
        }
        case addSuccess().type: {
            return {data: [...state.data, action.payload]}
            break;
        }
        default: {
            return state;
        }

    }

}