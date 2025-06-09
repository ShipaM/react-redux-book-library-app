export type Book = {
  title: string;
  author: string;
  id: string;
  isFavorite: boolean;
};

export type BookActionType = "ADD_BOOK" | "DELETE_BOOK";

export type BookAction =
  | { type: "ADD_BOOK"; payload: Book }
  | { type: "DELETE_BOOK"; payload: { id: Book["id"] } }
  | { type: "TOGGLE_FAVORITE"; payload: { id: Book["id"] } };
