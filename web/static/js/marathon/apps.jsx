import React from "react";
import App from "./app.jsx";
import Stores from '../store/stores.jsx';
import "whatwg-fetch";

class Apps extends React.Component {

  constructor() {
    super();
    this.state = {
      apps: []
    };
  }

  componentDidMount() {
    Stores.pollHttp('/marathon/apps')
      .subscribe((apps) => this.setState(apps));
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>CPU</th>
            <th>Memory</th>
            <th>Status</th>
            <th>Instances</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.apps.map(app => <App {...app} key={app.id}/>)
          }
        </tbody>
      </table>
    );
  }
}

export default Apps;
