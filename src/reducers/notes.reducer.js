import {FETCH_NOTES} from "./contants/actions";
import {request as r} from "./http/http.get.reducer";
import {success as s} from "./http/http.get.reducer";
import {fail as f} from "./http/http.get.reducer";

/**
 *  Action get Notes
 * @returns {{type, payload: (*|any|AxiosInterceptorManager<AxiosRequestConfig>|<T>(config: AxiosRequestConfig) => AxiosPromise<T>)}}
 */
export const  request = r(FETCH_NOTES);
export const  success = s(FETCH_NOTES);
export const  fail = f(FETCH_NOTES);
export default function reducer(state = {fetching: false}, action) {


    switch (action.type) {
        case request().type:{
        return {...state, ... action.payload};
        }
        case success().type:{

            return {data:action.payload};
            break;
        }
        case fail.type:{
            return {...state, ... action.payload};
            break;
        }
        default: {
            return state;
        }

    }

}