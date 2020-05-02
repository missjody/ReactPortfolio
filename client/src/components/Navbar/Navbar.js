// Update with Materialize, add links to different pages
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class Nav extends Component {

  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            {/* changed to span from a with an href="#" */}
            <span data-target="slide-out" className="js-trigger sidenav-trigger show-on-large"><i className="material-icons">menu</i></span>
            <ul className="right hide-on-med-and-down">
              <li><a href="/home"><h5> Go Back</h5></a></li>
              <li><a href="/projects"><h5>Projects</h5></a></li>
              <li><a href="/contact"><h5> Reach Out</h5></a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav right" id="slide-out">
          <li><a href="/home"><h5> Go Back</h5></a></li>
          <li><a href="/projects"><h5>Projects</h5></a></li>
          <li><a href="/contact"><h5> Reach Out</h5></a></li>
        </ul>
      </div>
    );

  }
}

export default Nav;


