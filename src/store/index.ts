/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

enum ActionType {
  SET_TRIP_BRIEF = 'SET_TRIP_BRIEF',
  SET_TRIP_FLIGHTS = 'SET_TRIP_FLIGHTS',
}

const InitialState = {
  tripBrief: {},
  flights: [],
};

export const setTripBrief = createAction<Trip>(ActionType.SET_TRIP_BRIEF);
export const setTripFlight = createAction<Flights[]>(ActionType.SET_TRIP_FLIGHTS);

const reducer = createReducer(InitialState, (builder) => {
  builder.addCase(setTripBrief, (state, action:any) => {
    // eslint-disable-next-line no-param-reassign
    state.tripBrief = action.payload;
  });
  builder.addCase(setTripFlight, (state, action:any) => {
    // eslint-disable-next-line no-param-reassign
    state.flights = action.payload;
  });
});

export const store = configureStore({
  reducer,
});
