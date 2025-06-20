import { useState, type FC } from "react";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreator";
import booksData from "../../data/books.json";
import createBookWithID from "../../utils/createBookWithID";

export const BookForm: FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && author) {
      // const newBook = {
      //   title,
      //   author,
      //   id: uuidv4(),
      //   isFavorite: false,
      // };

      const newBook = createBookWithID({ title, author });

      dispatch(addBook(newBook));
      setTitle("");
      setAuthor("");
    }
  };

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    // const randomBookWithId = { ...randomBook, id: uuidv4(), isFavorite: false };

    const randomBookWithId = createBookWithID(randomBook);

    dispatch(addBook(randomBookWithId));
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  );
};
