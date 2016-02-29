import React from "react";

class Json extends React.Component {

  render() {
    return (
      <pre>{JSON.stringify(this.props.children, null, 4)}</pre>
    );
  }
}

export default Json;
