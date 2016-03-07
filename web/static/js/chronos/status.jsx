import React from "react";

class ProgressBars {

  static klazz(job) {
    let klazz = '';
    if (job.lastRunStatus === 'failure') {
      klazz = 'progress-bar-danger';
    } else {
      klazz = 'progress-bar-success';
    }
    return `progress-bar ${klazz}`;
  }
}

class Status extends React.Component {
  render() {
    return (
      <div className="progress">
        <div className={ProgressBars.klazz(this.props)} role="progressbar"
          aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
        </div>
      </div>
    )
  }
}

export default Status;
