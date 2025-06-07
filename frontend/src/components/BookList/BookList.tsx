import type { FC } from "react";
import "./BookList.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { Book } from "../../redux/books/types";
import { deleteBook } from "../../redux/books/actionCreator";

export const BookList: FC = () => {
  const books = useSelector((state: RootState) => state.books);

  const dispatch = useDispatch();
  const handleDeleteBook = (id: Book["id"]) => {
    console.log(id);
    dispatch(deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.title}>
              <div className="book-info">
                {++i} {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
