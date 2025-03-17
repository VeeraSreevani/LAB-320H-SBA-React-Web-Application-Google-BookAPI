import { useState } from "react";

function BookSearch({ books }) {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (book) => {
    setWishlist([...wishlist, book]);
    alert(`${book.volumeInfo.title} has been added to your wishlist!`);
  };
  const loaded = () => {
    return (
      <div className="book-container">
        {books.map((book, index) => {
          const {
            title,
            authors,
            publisher,
            publishedDate,
            imageLinks,
            previewLink,
          } = book.volumeInfo;

          const bookImage = imageLinks?.thumbnail;

          return (
            <div className="book-card" key={index}>
              {bookImage && (
                <img className="book-image" src={bookImage} alt={title} />
              )}
              <p>
                <strong>{title}</strong>
              </p>
              <p><strong>Author:</strong> {authors}</p>
              <p><strong>Publisher:</strong> {publisher}</p>
              <p><strong>Publish Date:</strong>{publishedDate}</p>
              <div>
                <a href={previewLink}      target="_blank">
                  Preview This Book
                </a>

                <button
                  onClick={() => addToWishlist(book)}
                  className="wishlist-btn"
                >
                  Add to Wish-List
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>No Book to display</h1>;
  };
  return books ? loaded() : loading();
}
export default BookSearch;
