import {
  SET_COUNT,
  SET_TAREFAS,
  SET_CLICKS,
  SET_REPOS
} from '../../constants/exemplo';
import GitHub from '../../services/GitHub';

const setRepos = payload => ({
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
  try {
    const resGitHub = await GitHub.myRepo(username);

    dispatch(setRepos(filterData(resGitHub.data)));
  } catch (error) {
    console.log(error);
  }
};

const filterData = data => {
  return data.map(ele => ({ id: ele.id, nome: ele.name }));
};
