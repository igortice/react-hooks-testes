import GitHubModel from '../../models/GitHubModel';
import ProjetoModel from '../../models/ProjetoModel';
import GitHubService from '../../services/GitHubService';

export const Types = {
  SET_CLICKS: 'SET_CLICKS',
  SET_TAREFAS: 'SET_TAREFAS',
  SET_COUNT: 'SET_COUNT',
  SET_REPOS: 'SET_REPOS'
};

const initialState = {
  um: { clicks: 0 },
  dois: { tarefas: [] },
  tres: { count: 0 },
  cinco: new GitHubModel(1)
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_CLICKS:
      return {
        ...state,
        um: { clicks: payload }
      };
    case Types.SET_TAREFAS:
      return {
        ...state,
        dois: { tarefas: payload }
      };
    case Types.SET_COUNT:
      return {
        ...state,
        tres: { count: payload }
      };
    case Types.SET_REPOS:
      return {
        ...state,
        cinco: { projetos: payload }
      };
    default:
      return state;
  }
};

export const Creators = {
  fetchClicks: payload => dispatch =>
    dispatch({
      type: Types.SET_CLICKS,
      payload
    }),

  fetchTarefas: payload => dispatch =>
    dispatch({
      type: Types.SET_TAREFAS,
      payload
    }),

  fetchCounts: payload => dispatch =>
    dispatch({
      type: Types.SET_COUNT,
      payload
    }),

  fetchRepos: username => async dispatch => {
    try {
      const resGitHub = await GitHubService.myRepo(username);

      const payload = filterData(resGitHub.data);
      dispatch({
        type: Types.SET_REPOS,
        payload
      });

      return resGitHub;
    } catch (error) {
      console.log(error);
    }
  }
};

const filterData = data => {
  return data.map(ele => new ProjetoModel(ele.id, ele.name));
};
