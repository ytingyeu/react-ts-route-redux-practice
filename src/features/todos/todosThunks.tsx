import axios from "axios";
import {
  fetchTodosInProgress,
  fetchTodosSuccess,
  fetchTodosFailuare,
} from "./todosActions";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { TRootState } from "src/app/store";

const apiBaseUrl = "http://localhost:8080";

// thunk: a function returns another function for executing later

// thunkAPI: an object includes dispatch and getState functions

export const fetchTodosThunk = createAsyncThunk(
  "todos/fetchTodos",
  async (_parm, thunkApi) => {
    return axios
      .get(`${apiBaseUrl}/todos`)
      .then((response) => {
        console.log(response);
        thunkApi.dispatch(fetchTodosSuccess(response.data));
      })
      .catch((error) => {
        thunkApi.dispatch(fetchTodosFailuare(error.message));
      });
  }
);


/*----- without createAsyncThunk() -----*/
// export const fetchTodosThunk = () => {
//   return async (dispatch: Dispatch, getState: () => TRootState) => {
//     axios
//       .get(`${apiBaseUrl}/todos`)
//       .then((response) => {        
//         dispatch(fetchTodosSuccess(response.data));
//       })
//       .catch((error) => {        
//         dispatch(fetchTodosFailuare(error.message));
//       });
//   };
// };
