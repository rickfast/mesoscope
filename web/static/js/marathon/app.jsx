import React from "react";
import Status from "./status.jsx";
import {Link} from "react-router";

class App extends React.Component {

  render() {
    const id = this.props.id.substr(1, this.props.id.length - 1);
    
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.cpus}</td>
        <td>{this.props.mem}</td>
        <td><Status {...this.props} /></td>
        <td>{this.props.instances}</td>
        <td>
          <Link to={`/apps/${id}`}>
            <span className="glyphicon glyphicon-search"/>
          </Link>
        </td>
      </tr>
    );
  }
}

export default App;
