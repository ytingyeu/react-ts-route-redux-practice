import axios from "axios";

import { fetchTodosSuccess } from "./todosActions";

import {
  fetchInProgress,
  fetchTerminated,
  requestFailure,
} from "src/common/sharedRedux/sharedActions";

import { createAsyncThunk } from "@reduxjs/toolkit";
// import { Dispatch } from "redux";
// import { TRootState } from "src/app/store";

const apiBaseUrl = "http://localhost:8080";

// thunk: a function returns another function for executing later
// thunkAPI: an object includes dispatch(), getState(), extra(), and rejectWithValue() from trunk middleware

export const fetchTodosThunk = createAsyncThunk(
  "todos/fetchTodos",
  async (_params, thunkApi) => {
    thunkApi.dispatch(fetchInProgress());

    try {
      const response = await axios.get(`${apiBaseUrl}/todos`);
      thunkApi.dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      if (error.response) {
        const { status, statusText } = error.response;

        const errorInfo = {
          isFailure: true,
          status: status,
          message: statusText,
        };

        thunkApi.dispatch(requestFailure(errorInfo));
      } else {
        const errorInfo = {
          isFailure: true,
          message: error.message,
        };

        thunkApi.dispatch(requestFailure(errorInfo));
      }
    } finally {
      thunkApi.dispatch(fetchTerminated());
    }
  }
);

/*----- without createAsyncThunk() -----*/
// export const fetchTodosThunk = () => {
//   return async (dispatch: Dispatch, _getState: () => TRootState) => {
//     try {
//       dispatch(fetchInProgress());
//       const response = await axios.get(`${apiBaseUrl}/todos`);
//       dispatch(fetchTodosSuccess(response.data));
//     } catch (error) {
//       dispatch(
//         fetchTodosFailuare(
//           error.message ? error.message : "Error occurs when fetching data."
//         )
//       );
//     } finally {
//       dispatch(fetchTerminated());
//     }
//   };
// };
