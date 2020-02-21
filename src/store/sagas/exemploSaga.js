import { put, takeLatest, call, all, takeEvery } from 'redux-saga/effects';
import {
  SET_CLICKS,
  SET_TAREFAS,
  SET_COUNT,
  SET_REPOS
} from '../../constants/exemplo';
import GitHubService from '../../services/GitHubService';
import ProjetoModel from '../../models/ProjetoModel';

function* setClick({ payload }) {
  try {
    yield put({ type: SET_CLICKS, payload });
  } catch (e) {
    yield put({ type: 'SET_COUNT_FAILED', message: e.message });
  }
}

function* setTarefas({ payload }) {
  try {
    yield put({ type: SET_TAREFAS, payload });
  } catch (e) {
    yield put({ type: 'SET_COUNT_FAILED', message: e.message });
  }
}

function* setCount({ payload }) {
  try {
    yield put({ type: SET_COUNT, payload });
  } catch (e) {
    yield put({ type: 'SET_COUNT_FAILED', message: e.message });
  }
}

function* fetchGitHub({ username }) {
  try {
    const response = yield call(GitHubService.myRepo, username);

    const payload = filterData(response.data);

    yield put({ type: SET_REPOS, payload });
  } catch (e) {
    yield put({ type: 'SET_COUNT_FAILED', message: e.message });
  }
}

const filterData = data => {
  return data.map(ele => new ProjetoModel(ele.id, ele.name));
};

function* exemploSaga() {
  yield all([
    takeLatest('setClick', setClick),
    takeLatest('setTarefas', setTarefas),
    takeLatest('setCount', setCount),
    takeEvery('FETCH_GITHUB', fetchGitHub)
  ]);
}

export default exemploSaga;
