import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_DATA_ACTION, loadDataSuccessAction } from '../actions';

const API = 'https://api.collegefootballdata.com';

// decouple external API specifics from our entity naming
const api_entity_urls = {
  "teams" : "/teams",
  "conferences": "/conferences"
}

const getDataFromAPI = (entity) => {
    return fetch(API + api_entity_urls[entity]);
}

function* loadDataSaga({ payload }) {
  const request = yield call(getDataFromAPI, payload.entity);
  const result = yield call([request, 'json']);

  const data = {};
  data[payload.entity] = result;

  yield put(loadDataSuccessAction(data));
}

function* rootSaga() {
  yield takeEvery(LOAD_DATA_ACTION, loadDataSaga);
}

export default rootSaga;