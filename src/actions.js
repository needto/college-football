export const LOAD_DATA_ACTION = 'LOAD_DATA_ACTION';
export const LOAD_DATA_ACTION_SUCCESS = 'LOAD_DATA_ACTION_SUCCESS';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_PER_PAGE = 'SET_PER_PAGE';

export const loadDataAction = (entity) => ({
  type: LOAD_DATA_ACTION,
  payload: {
    entity,
  },
});

export const loadDataSuccessAction = (data) => ({
  type: LOAD_DATA_ACTION_SUCCESS,
  payload: {
    ...data,
  },
});

export const setFiltersAction = (filters) => ({
  type: SET_FILTERS,
  payload: {
    filters,
  },
});

export const setOffsetAction = (offset) => ({
  type: SET_OFFSET,
  payload: {
    offset,
  },
});

export const setPerPageAction = (perPage) => ({
  type: SET_PER_PAGE,
  payload: {
    perPage,
  },
});
