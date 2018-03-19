import {fork} from 'redux-saga/effects'
import notesFetchSaga from './notes.saga';

const sagas = [
    notesFetchSaga,
]

function* rootSaga() {
    yield sagas.map(saga => fork(saga));
}
export default rootSaga;