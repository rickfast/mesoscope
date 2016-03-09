import React from "react";

class Active extends React.Component {

  render() {
    const klazz = this.props.active ? 'success' : 'default';
    const label = this.props.active ? 'Active' : 'Inactive';
    
    return (
      <span className={`label label-${klazz} pull-right`}>
        {label}
      </span>
    );
  }
}

export default Active;
