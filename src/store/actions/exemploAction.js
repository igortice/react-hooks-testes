import {
  SET_COUNT,
  SET_TAREFAS,
  SET_CLICKS,
  SET_REPOS,
  LOADING
} from '../../constants/exemplo';
import GitHub from '../../services/GitHub';

const _loading = loading => ({
  type: LOADING,
  loading
});

const _setRepos = payload => ({
  type: SET_REPOS,
  payload
});

export const setCount = payload => ({
  type: SET_COUNT,
  payload
});

export const setTarefas = payload => ({
  type: SET_TAREFAS,
  payload
});

export const setClicks = payload => ({
  type: SET_CLICKS,
  payload
});

export const getReposGitHub = username => async dispatch => {
  dispatch(_loading(true));

  try {
    const resGitHub = await GitHub.myRepo(username);
    dispatch(_loading(false));

    dispatch(_setRepos(filterData(resGitHub.data)));

    return resGitHub;
  } catch (error) {
    console.log(error);
  }
};

const filterData = data => {
  const result = data.map(ele => ({ id: ele.id, nome: ele.name }));

  return result;
};
