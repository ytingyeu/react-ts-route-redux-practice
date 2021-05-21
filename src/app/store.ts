import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { todosReducer } from "src/features/todos/todosReducer";
import {
  isFetchingReducer,
  requestFailureReducer,
} from "src/common/sharedRedux/sharedReducers";

// For details about configureStore,
// visits https://redux-toolkit.js.org/api/configureStore
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    isFetching: isFetchingReducer,
    requestFailure: requestFailureReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TAppDispatch = typeof store.dispatch;
