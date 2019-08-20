import React from "react";

const AuthorDetail = () => {
  return (
    <div className="author col-xs-10">
      <div>
        <h3>I SHOULD BE AN AUTHOR NAME</h3>
        <img
          src="http://catchingfire.ca/wp-content/uploads/2016/09/question-mark-square-01.png"
          className="img-thumbnail"
          alt="I SHOULD BE AN AUTHOR NAME TOO"
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
        <tbody>
          <tr>
            <td>I SHOULD BE A BOOK NAME</td>
            <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
            <td>
              <button className="btn" style={{ backgroundColor: "blue" }} />
            </td>
          </tr>
          <tr>
            <td>I SHOULD BE ANOTHER BOOK NAME</td>
            <td>I SHOULD BE A STRING OF THIS OTHER BOOK'S AUTHORS</td>
            <td>
              <button className="btn" style={{ backgroundColor: "red" }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;
