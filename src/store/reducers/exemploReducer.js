import { SET_COUNT } from '../../constants/exemplo';

const initialState = {
  um: { count: 0 }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNT:
      return {
        ...state,
        um: { count: payload }
      };
    default:
      return state;
  }
};
