import { createReducer } from '@reduxjs/toolkit';
import { fetchWorkers, requestWorkersSuccess, requestWorkersError } from './';

const initialState = {
  workersData: ['первое', 'второе'],
  loading: false,
  error: false,
};

export default createReducer(initialState, {
  [fetchWorkers]: function (state) {
    state.workersData;
  },
  [requestWorkersSuccess]: function (state) {
    state.loading = false;
  },
  [requestWorkersError]: function (state) {
    state.error = true;
  },
});
