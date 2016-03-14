import React from "react";
import Job from "./job.jsx";
import Stores from "../store/stores.jsx";
import "whatwg-fetch";

class Jobs extends React.Component {

  constructor() {
    super();
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    Stores.pollHttp('/chronos/jobs')
      .subscribe(jobs => this.setState({jobs: jobs}));
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>CPU</th>
            <th>Memory</th>
            <th>State</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.jobs.map(job => <Job {...job} key={job.name}/>)
          }
        </tbody>
      </table>
    );
  }
}

export default Jobs;
