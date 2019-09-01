import React from "react";

const AuthorDetail = props => {
  const author = props.author;

  const bookRow = () =>
    author.books.map(book => (
      <tr>
        <td>{book.title}</td>
        <td>{author.first_name}</td>
        <td>
          <button
            className="btn"
            style={{ backgroundColor: `${book.color}` }}
          />
        </td>
      </tr>
    ));
  return (
    <div className="author col-xs-10">
      <div>
        <h3>
          {author.first_name} {author.last_name}
        </h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail"
          alt={author.first_name}
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookRow()}</tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;
