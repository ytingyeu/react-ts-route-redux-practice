import { createReducer } from "@reduxjs/toolkit";

import { fetchInProgress, fetchTerminated } from "./sharedActions";

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
