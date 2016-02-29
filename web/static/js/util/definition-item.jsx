import React from "react";

class DefinitionItem extends React.Component {

  render() {
    return (
      <dd>
        {this.props.children ? this.props.children : '-'}
      </dd>
    );
  }
}

export default DefinitionItem;
