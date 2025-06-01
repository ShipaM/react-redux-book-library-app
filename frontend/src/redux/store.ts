import {
  configureStore,
  type Reducer,
  type UnknownAction,
} from "@reduxjs/toolkit";
import { booksReducer } from "./books/reducer";
import type { Book } from "./books/types";

export const store = configureStore({
  reducer: {
    books: booksReducer as Reducer<Book[], UnknownAction, Book[]>,
  },
});

export type RootState = ReturnType<typeof store.getState>;
