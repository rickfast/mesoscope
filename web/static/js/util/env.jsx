import React from "react";
const Map = require('es6-map');

class Env extends React.Component {
  render() {
    let env = [];

    for(let k in this.props.env) {
      env.push([k, this.props.env[k]]);
    }

    return (
      <span>
        {
          env.map(e => <div><code>{e[0]}={e[1]}</code></div>)
        }
      </span>
    );
  }
}

export default Env;
