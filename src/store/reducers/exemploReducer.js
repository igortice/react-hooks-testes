import {
  SET_COUNT,
  SET_TAREFAS,
  SET_CLICKS,
  SET_REPOS
} from '../../constants/exemplo';

const initialState = {
  um: { clicks: 0 },
  dois: { tarefas: [] },
  tres: { count: 0 },
  cinco: { repos: [], loading: false }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CLICKS:
      return {
        ...state,
        um: { clicks: payload }
      };
    case SET_TAREFAS:
      return {
        ...state,
        dois: { tarefas: payload }
      };
    case SET_COUNT:
      return {
        ...state,
        tres: { count: payload }
      };
    case SET_REPOS:
      return {
        ...state,
        cinco: { repos: payload }
      };
    default:
      return state;
  }
};
