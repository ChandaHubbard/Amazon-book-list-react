import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "A Promised Land";
  const author = "Barack Obama";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg"
        alt="Promised Land Book"
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
