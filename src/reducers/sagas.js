import {fork} from 'redux-saga/effects'
import {notesFetchSaga, notesDeleteSaga, notesAddSaga} from './notes.saga';

const sagas = [
    notesFetchSaga,
    notesDeleteSaga,
    notesAddSaga
]

function* rootSaga() {
    yield sagas.map(saga => fork(saga));
}
export default rootSaga;