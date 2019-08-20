import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  resetState = () => {
    this.setState({ currentAuthor: null });
  };

  filterAuthors = query => {};
  render() {
    if (this.state.currentAuthor) {
      return (
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar resetState={this.resetState} />
            </div>
            <div className="content col-10">
              <AuthorDetail />
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
            <AuthorsList authors={authors} selectAuthor={this.selectAuthor} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
