import React from "react";
import Status from "./status.jsx";

class App extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.cpus}</td>
        <td>{this.props.mem}</td>
        <td><Status {...this.props} /></td>
        <td>{this.props.instances}</td>
      </tr>
    );
  }
}

export default App;
