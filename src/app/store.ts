import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "src/features/todos/todosReducer";

// For details about ConfigureStoreOptions,
// visits https://redux-toolkit.js.org/api/configureStore
const reduxOptions = {
  reducer: {
    todos: todosReducer,
  },
};

export const store = configureStore(reduxOptions);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TAppDispatch = typeof store.dispatch;
