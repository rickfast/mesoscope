import React from "react";
import {Link} from "react-router";

class SideMenuLink extends React.Component {

  render() {
    return (
      <li>
        <Link to={this.props.link}><span className="fa-stack fa-lg pull-left"></span>{this.props.label}</Link>
      </li>
    );
  }
}

export default SideMenuLink;
