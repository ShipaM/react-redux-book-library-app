import type { FC } from "react";
import "./BookList.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

export const BookList: FC = () => {
  const books = useSelector((state: RootState) => state.books);
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
