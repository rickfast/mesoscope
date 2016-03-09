import React from "react";
import Donut from "./donut.jsx";

class ResourceDonut extends React.Component {

  render() {
    const data = [{
        value: this.props.used,
        color:"#006600",
        highlight: "#FF5A5E",
        label: `Used ${this.props.type}`
    }, {
        value: this.props.total - this.props.used,
        color:"#AAAAAA",
        highlight: "#FF5A5E",
        label: `Free ${this.props.type}`
    }];

    return (
      <Donut data={data} />
    );
  }
}

export default ResourceDonut;
