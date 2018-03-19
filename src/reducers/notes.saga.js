import {takeEvery, call, put} from 'redux-saga/effects'
import {getNotes as fetch} from '../api/note';
import {FETCH_NOTES, REQUEST} from "./contants/actions";
import {success} from './notes.reducer'

export function* generate(action){
    try{
        const fetchNotes = yield call(fetch, action);
        yield put(success(fetchNotes.data));
    }
    catch(error){
        //yield put({})
    }
}

export function* notesFetchSaga(){
    yield takeEvery(FETCH_NOTES+REQUEST, generate)
}

export default notesFetchSaga;