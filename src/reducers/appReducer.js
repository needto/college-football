import {
  LOAD_DATA_ACTION_SUCCESS,
  SET_OFFSET,
  SET_FILTERS,
  SET_PER_PAGE
} from '../actions';

const defaultState = {
  teams: [],
  teamsLoaded: false,
  conferences: [],
  filters: {},
  offset: 0,
  perPage: 10,
};

const appReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOAD_DATA_ACTION_SUCCESS:
      return {
        ...state,
        ...payload,
        offset: 0,
        filters: {},
      };

    case SET_OFFSET: {
      return {
        ...state,
        offset: payload.offset,
      }
    }
    case SET_FILTERS: {
      return {
        ...state,
        filters: payload.filters,
        offset: 0,
      }
    }
    case SET_PER_PAGE: {
      return {
        ...state,
        perPage: payload.perPage,
        offset: 0,
      }      
    }    
    default:
      return state;
  }
}

export default appReducer;