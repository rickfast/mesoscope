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
    setInterval(() => {
      fetch('/marathon')
        .then(response => response.json())
        .then(json => this.setState(json))
        .catch(ex => console.log('parsing failed', ex))
    }, 5000);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>CPU</th>
            <th>Memory</th>
            <th>Status</th>
            <th>Instances</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.apps.map(app => <App {...app} />)
          }
        </tbody>
      </table>
    );
  }
}

export default Apps;
