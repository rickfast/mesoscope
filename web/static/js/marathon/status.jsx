import React from "react";
import ProgressBars from "../util/progress-bars.jsx";

class Status extends React.Component {
  render() {
    return (
      <div className="progress" style={{marginTop: '5px'}}>
        <div className={ProgressBars.klazz(this.props)} role="progressbar"
          aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
        </div>
      </div>
    )
  }
}

export default Status;
