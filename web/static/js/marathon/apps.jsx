import React from "react";
import App from "./app.jsx";
import "whatwg-fetch";

class Apps extends React.Component {

  constructor() {
    super();
    this.state = {
      apps: []
    };
  }

  componentDidMount() {
    this.fetch();
    setInterval(() => {
      this.fetch();
    }, 5000);
  }

  fetch() {
    fetch('/marathon/apps')
      .then(response => response.json())
      .then(json => this.setState(json))
      .catch(ex => console.log('parsing failed', ex));
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
