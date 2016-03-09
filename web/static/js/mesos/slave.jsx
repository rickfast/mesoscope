import React from "react";
import ResourceDonut from "../util/resource-donut.jsx";
import Active from "./active.jsx";

class Slave extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <Active active={this.props.active} />
              {this.props.hostname}
            </h3>
          </div>
          <div className="panel-body">
            <div className="col-lg-4">
              <ResourceDonut used={this.props.used_resources.cpus}
                total={this.props.resources.cpus}
                type="CPU" />
            </div>
            <div className="col-lg-4">
              <ResourceDonut used={this.props.used_resources.mem}
                total={this.props.resources.mem}
                type="Memory (MB)" />
            </div>
            <div className="col-lg-4">
              <ResourceDonut used={this.props.used_resources.disk}
                total={this.props.resources.disk}
                type="Disk (MB)" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slave;
