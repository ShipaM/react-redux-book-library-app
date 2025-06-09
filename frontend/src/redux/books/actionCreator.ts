import * as a from "./actionTypes";
import type { Book } from "./types";

export const addBook = (newBok: Book) => ({
  type: a.ADD_BOOK,
  payload: newBok,
});

export const deleteBook = (id: Book["id"]) => ({
  type: a.DELETE_BOOK,
  payload: { id },
});

export const toggleFavorite = (id: Book["id"]) => ({
  type: a.TOGGLE_FAVORITE,
  payload: { id },
});
