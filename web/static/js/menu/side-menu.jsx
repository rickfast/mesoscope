import React from "react";
import {Link} from "react-router";

class SideMenu extends React.Component {

  render() {
    return (
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav nav-pills nav-stacked" id="menu" style={{marginTop: '55px'}}>
              <li>
                  <Link to="/"><span className="fa-stack fa-lg pull-left"></span>Marathon</Link>
              </li>
              <li>
                  <a href="#"> <span className="fa-stack fa-lg pull-left"></span>Chronos</a>
              </li>
          </ul>
      </div>
    );
  }
}

export default SideMenu;
