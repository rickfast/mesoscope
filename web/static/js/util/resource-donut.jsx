import React from "react";
import Donut from "./donut.jsx";

class ResourceDonut extends React.Component {

  render() {
    const data = [{
        value: this.props.used,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: `Used ${this.props.type}`
    }, {
        value: this.props.total - this.props.used,
        color:"#00FF22",
        highlight: "#FF5A5E",
        label: `Free ${this.props.type}`
    }];

    return (      
      <Donut data={data} />
    );
  }
}

export default ResourceDonut;
