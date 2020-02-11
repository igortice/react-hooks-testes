import { SET_COUNT, SET_TAREFAS, SET_CLICKS } from '../../constants/exemplo';

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
