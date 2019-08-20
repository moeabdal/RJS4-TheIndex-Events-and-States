import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import Searchbar from "./Searchbar";

function AuthorsList(props) {
  const authorCards = props.authors.map(author => (
    <AuthorCard
      key={author.first_name + author.last_name}
      author={author}
      selectAuthor={props.selectAuthor}
    />
  ));

  return (
    <div className="authors">
      <Searchbar />
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
}

export default AuthorsList;
