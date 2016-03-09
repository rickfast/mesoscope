import React from "react";
import Slave from "./slave.jsx";

class Slaves extends React.Component {

  constructor() {
    super();
    this.state = {
      slaves: []
    };
  }
  componentDidMount() {
    this.fetch();
    setInterval(() => {
      this.fetch();
    }, 5000);
  }

  fetch() {
    fetch('/mesos/slaves')
      .then(response => response.json())
      .then(json => this.setState(json))
      .catch(ex => console.log('parsing failed', ex));
  }

  render() {
    return (
      <div className="row col-lg-12">
        {
          this.state.slaves.map(slave =>
            <Slave {...slave} key={slave.id} />
          )
        }
      </div>
    );
  }
}

export default Slaves;
