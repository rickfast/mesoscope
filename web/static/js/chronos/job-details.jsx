import React from "react";
import SideMenu from "../menu/side-menu.jsx";
import Env from "../util/env.jsx";
import DefinitionItem from "../util/definition-item.jsx";
import Json from "../util/json.jsx";

class JobDetails extends React.Component {

  render() {
    return (
      <div id="wrapper">
        <SideMenu />
        <div className="col-lg-12" style={{marginTop: "70px"}}>
          <h4>Details ({this.state.name})</h4>
          <div className="container-fluid xyz">
            <dl className="dl-horizontal">
              <dt>Name</dt><DefinitionItem>{this.state.name}</DefinitionItem>
              <dt>Command</dt><DefinitionItem>{this.state.command}</DefinitionItem>
              <dt>Shell</dt><DefinitionItem>{this.state.shell}</DefinitionItem>
              <dt>Epsilon</dt><DefinitionItem>{this.state.epsilon}</DefinitionItem>
              <dt>Memory</dt><DefinitionItem>{this.state.mem} MiB</DefinitionItem>
              <dt>CPUs</dt><DefinitionItem>{this.state.cpus} MiB</DefinitionItem>
              <dt>Disk</dt><DefinitionItem>{this.state.disk}</DefinitionItem>
              <dt>Owner</dt><DefinitionItem>{this.state.owner}</DefinitionItem>
              <dt>Environment</dt><DefinitionItem><Env env={this.state.environmentVariables} /></DefinitionItem>
              <dt>Container</dt><DefinitionItem><Json>{this.state.container}</Json></DefinitionItem>
              <dt>Schedule</dt><DefinitionItem>{this.state.schedule}</DefinitionItem>
              <dt>Success Count</dt><DefinitionItem>{this.state.successCount}</DefinitionItem>
              <dt>Error Count</dt><DefinitionItem>{this.state.errorCount}</DefinitionItem>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDetails;
