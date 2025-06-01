import * as a from "./actionTypes";
import type { Book } from "./types";

export const addBook = (newBok: Book) => ({
  type: a.ADD_BOOK,
  payload: newBok,
});
