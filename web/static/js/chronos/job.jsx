import React from "react";
import Status from "./status.jsx";
import {Link} from "react-router";

class Job extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.cpus}</td>
        <td>{this.props.mem}</td>
        <td><Status {...this.props} /></td>
        <td>
          <Link to={`/chronos/jobs/${this.props.name}`} state={this.props}>
            <span className="glyphicon glyphicon-search"/>
          </Link>
        </td>
      </tr>
    );
  }
}

export default Job;
