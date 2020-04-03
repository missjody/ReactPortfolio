// Update with Materialize, add links to different pages
import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="left hide-on-med-and-down">
          <li><a href="/home"><h5> Go Back</h5></a></li>
          <li><a href="/projects"><h5>Projects</h5></a></li>
          <li><a href="/contact"><h5> Reach Out</h5></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;


