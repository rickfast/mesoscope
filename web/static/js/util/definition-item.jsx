import React from "react";

class DefinitionItem extends React.Component {

  render() {
    return (
      <dd>
        {
          this.props.children
          ? this.props.children
          : <span style={{fontColor: '#333333'}}>Unspecified</span>}
      </dd>
    );
  }
}

export default DefinitionItem;
