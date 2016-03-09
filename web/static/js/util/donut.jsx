import React from "react";
import {Doughnut} from "react-chartjs";
import options from "./donut-opts";

class Donut extends React.Component {

  render() {
    return (
      <div className="col-lg-4">
        <Doughnut ref="chart" data={this.props.data} options={options}/>
      </div>
    );
  }
}

export default Donut;
