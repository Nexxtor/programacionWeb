import React from "react";
import ReactDOM from "react-dom";
import List from "./containers/List";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div className="container-fluid p-0 ">
      <nav className="navbar stick-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light">Movie List</h1>
      </nav>
      <List/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
