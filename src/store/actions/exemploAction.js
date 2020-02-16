import {
  SET_CLICKS,
  SET_COUNT,
  SET_REPOS,
  SET_TAREFAS
} from '../../constants/exemplo';

import GitHubService from '../../services/GitHubService';
import ProjetoModel from '../../models/ProjetoModel';

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
    const resGitHub = await GitHubService.myRepo(username);

    dispatch(setRepos(filterData(resGitHub.data)));
  } catch (error) {
    console.log(error);
  }
};

const filterData = data => {
  return data.map(ele => new ProjetoModel(ele.id, ele.name));
};
