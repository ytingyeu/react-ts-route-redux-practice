import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "src/features/todos/todosReducer";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    // comments: commentsReducer,
    // users: usersReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TAppDispatch = typeof store.dispatch;
