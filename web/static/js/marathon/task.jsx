import React from "react";

class Task extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.host}</td>
        <td>{this.props.ports.join(',')}</td>
      </tr>
    );
  }
}

export default Task;
