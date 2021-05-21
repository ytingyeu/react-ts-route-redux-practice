import axios from "axios";

import { fetchTodosSuccess, fetchTodosFailuare } from "./todosActions";

import {
  fetchInProgress,
  fetchTerminated,
} from "src/common/sharedRedux/sharedActions";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
      const response = await axios.get(`${apiBaseUrl}/todo`);
      thunkApi.dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      if (error.response) {
        const { status, statusText } = error.response;

        const errorInfo = {
          status: status,
          statusText: statusText,
        };

        thunkApi.dispatch(fetchTodosFailuare(errorInfo));
      } else {
        thunkApi.dispatch(fetchTodosFailuare(error.message));
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
