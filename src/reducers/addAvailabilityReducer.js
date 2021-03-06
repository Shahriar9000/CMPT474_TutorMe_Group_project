import { FETCH_ADD_AVAILABILITY } from '../actions/types';

const initialState = {
  item:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADD_AVAILABILITY:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}