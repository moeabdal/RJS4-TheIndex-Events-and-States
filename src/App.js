import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    authors: authors,
    currentAuthor: null,
    filteredAuthors: authors
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  resetState = () => {
    this.setState({ currentAuthor: null });
  };

  filterAuthors = query => {
    query = query.toLowerCase();
    let filteredAuthors = this.state.authors.filter(author => {
      return `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query);
    });
    this.setState({ filteredAuthors: filteredAuthors });
  };

  render() {
    if (this.state.currentAuthor) {
      return (
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar resetState={this.resetState} />
            </div>
            <div className="content col-10">
              <AuthorDetail author={this.state.currentAuthor} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <AuthorsList
              authors={this.state.filteredAuthors}
              selectAuthor={this.selectAuthor}
              filterAuthors={this.filterAuthors}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
