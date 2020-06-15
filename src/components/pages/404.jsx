import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">404 Not Found</h1>
      <p className="lead">
        The requested URL was not found on this server.
      </p>
        <hr className="my-4" />
      <p>
        Click the button below to go to Home page.
      </p>
      <Link to="/people" className="btn btn-primary btn-lg" role="button">
        Home page
      </Link>
    </div>
  );
}

export default NotFound;