import * as a from "./actionTypes";
import type { Book, BookAction } from "./types";

const initialState: Book[] = [];

export const booksReducer = (
  state = initialState,
  action: BookAction
): Book[] => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action?.payload];
    case a.DELETE_BOOK:
      return state.filter((item) => item.id !== action?.payload?.id);
    default:
      return state;
  }
};
