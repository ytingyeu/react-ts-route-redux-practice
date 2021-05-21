import { createReducer } from "@reduxjs/toolkit";

import {
  fetchInProgress,
  fetchTerminated,
  requestFailure,
  IRequestFailureState,
} from "./sharedActions";

export const isFetchingReducer = createReducer(false, (builder) => {
  builder
    .addCase(fetchInProgress, (_state, _action) => {
      return true;
    })
    .addCase(fetchTerminated, (_state, _action) => {
      return false;
    })
    .addDefaultCase((state, _action) => {
      return state;
    });
});

const requestFailureInitState: IRequestFailureState = {
  isFailure: false,
  message: "",
};

export const requestFailureReducer = createReducer(
  requestFailureInitState,
  (builder) => {
    builder.addCase(requestFailure, (_state, action) => {
      const error = action.payload;
      return error;
    });
  }
);
