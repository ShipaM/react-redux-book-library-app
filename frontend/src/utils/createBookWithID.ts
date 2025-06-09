import { v4 as uuidv4 } from "uuid";

const createBookWithID = (book: {
  title: string;
  author: string;
  year?: number;
}) => {
  return {
    ...book,
    id: uuidv4(),
    isFavorite: false,
  };
};

export default createBookWithID;
