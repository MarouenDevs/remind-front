import {takeEvery, call, put} from 'redux-saga/effects'
import {getNotes as fetch, deleteNote as deleteItem, postNote} from '../api/note';
import {ADD_NOTES, DELETE_NOTES, FETCH_NOTES, REQUEST} from "./contants/actions";
import {success,addSuccess, request} from './notes.reducer'



export function* load(action) {
    try {
        const fetchNotes = yield call(fetch, action);
        yield put(success(fetchNotes.data));
    }
    catch (error) {
        yield put(alert("Erreur serveur"))
    }
}

export function* deleteNote(action) {
    try {
        yield call(deleteItem, action.payload);
        yield put(request());
    }
    catch (error) {
        yield put(alert("Erreur serveur"))
    }
}

export function* addNote(action) {
    try {
        const note = yield call(postNote, action.payload);
        yield put(addSuccess(note.data));
    }
    catch (error) {
        yield put(alert("Erreur serveur"))
    }
}


export function* notesFetchSaga() {
    yield takeEvery(FETCH_NOTES + REQUEST, load);


}

export function* notesAddSaga() {

    yield takeEvery(ADD_NOTES + REQUEST, addNote);


}

export function* notesDeleteSaga() {
    yield takeEvery(DELETE_NOTES + REQUEST, deleteNote);

};



