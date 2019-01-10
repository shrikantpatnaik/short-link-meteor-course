import React from "react";
import {Link} from "react-router-dom";

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Unable to find the page you are looking for.</p>
        <Link className="button button--link" to="/">Head Home</Link>
      </div>
    </div>
  )
}