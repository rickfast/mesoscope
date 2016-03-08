import React from "react";
import SideMenu from "../menu/side-menu.jsx";
import Env from "../util/env.jsx";
import DefinitionItem from "../util/definition-item.jsx";
import Json from "../util/json.jsx";
import Task from "./task.jsx";

class AppDetails extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(`/marathon/apps/${this.props.params.id}`)
      .then(response => response.json())
      .then(json => this.setState(json.app))
      .catch(ex => console.log('parsing failed', ex))
  }

  render() {
    const id = this.state.id ?
      this.state.id.substr(1, this.state.id.length - 1) :
      '';

    return (
      <div id="wrapper">
        <SideMenu />
        <div className="col-lg-6" style={{marginTop: "70px"}}>
          <h4>Details ({id})</h4>
          <div className="container-fluid xyz">
            <dl className="dl-horizontal">
              <dt>ID</dt><DefinitionItem>{id}</DefinitionItem>
              <dt>Command</dt><DefinitionItem>{this.state.cmd}</DefinitionItem>
              <dt>Arguments</dt><DefinitionItem>{this.state.args}</DefinitionItem>
              <dt>CPUs</dt><DefinitionItem>{this.state.cpus}</DefinitionItem>
              <dt>Memory</dt><DefinitionItem>{this.state.mem} MiB</DefinitionItem>
              <dt>Command</dt><DefinitionItem>{this.state.cmd}</DefinitionItem>
              <dt>User</dt><DefinitionItem>{this.state.user}</DefinitionItem>
              <dt>Environment</dt><DefinitionItem><Env env={this.state.env} /></DefinitionItem>
              <dt>Instances</dt><DefinitionItem>{this.state.instances}</DefinitionItem>
              <dt>Disk</dt><DefinitionItem>{this.state.disk}</DefinitionItem>
              <dt>Constraints</dt><DefinitionItem><Json>{this.state.constraints}</Json></DefinitionItem>
              <dt>Container</dt><DefinitionItem><Json>{this.state.container}</Json></DefinitionItem>
              <dt>Version</dt><DefinitionItem>{this.state.version}</DefinitionItem>
            </dl>
          </div>
        </div>
        <div className="col-lg-6" style={{marginTop: "70px"}}>
          <h4>Tasks</h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Host</th>
                <th>Ports</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.tasks ?
                  this.state.tasks.map(task => <Task {...task} />) :
                  ""
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AppDetails;
