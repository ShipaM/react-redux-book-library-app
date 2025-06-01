export type Book = { title: string; author: string };

export type BookActionType = "ADD_BOOK" | "REMOVE_BOOK";

export type BookAction = { type: BookActionType; payload: Book };
