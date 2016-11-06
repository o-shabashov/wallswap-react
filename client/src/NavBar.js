import React from "react";
import Navbar from "react-bootstrap/lib/Navbar";

const NavBar = React.createClass({
  render: function () {
    return (
      <section id="navigation">
        <Navbar className="navbar-inverse">
          <Navbar.Header>
            <button type="button" className="navbar-toggle" data-toggle="collapse"
                    data-target="#w1-collapse"><span
              className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span></button>
            <div id="w1-collapse" className="collapse navbar-collapse"></div>
            <Navbar.Brand>
              <a href="/">Wallswap</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </section>
    );
  },
});

export default NavBar;
