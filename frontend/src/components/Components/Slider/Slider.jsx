import React from "react";
import "./Slider.css";

// Original books array
const books = [
  {
    cover: "https://m.media-amazon.com/images/I/41SH-SvWPxL._SX376_BO1,204,203,200_.jpg",
  },
  {
    cover: "https://m.media-amazon.com/images/I/51A5cHQhSqL._SX258_BO1,204,203,200_.jpg",
  },
  {
    cover: "https://m.media-amazon.com/images/I/51w6EZdGCFL._SY445_SX342_.jpg",
  },
  {
    cover: "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UY218_.jpg",
  },
  {
    cover: "https://m.media-amazon.com/images/I/61go3pwTLYL._AC_UY218_.jpg",
  },
  {
    cover: "https://m.media-amazon.com/images/I/51U7VqFciNL._SY445_SX342_.jpg",
  },
  {
    cover: "https://m.media-amazon.com/images/I/71BzOQm7s-L._AC_UY218_.jpg",
  },
  {
    cover: "https://m.media-amazon.com/images/I/71Xpd1xEKcL._SY342_.jpg",
  },
];

function SliderComponent() {
  // Duplicate the books array multiple times for continuous scrolling
  const duplicatedBooks = [...books, ...books, ...books];

  return (
    <section className="slider-wrapper innerWidth">
      <div className="slider-section">
        <div className="slider-track">
          {duplicatedBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.cover} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SliderComponent;

