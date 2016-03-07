import React from "react";
import SideMenu from "../menu/side-menu.jsx";
import Jobs from "./jobs.jsx";

class Chronos extends React.Component {

  render() {
    return (
      <div id="wrapper">
        <SideMenu />
        <div style={{marginTop: "70px"}}>
          <div className="container-fluid xyz">
            <Jobs />
          </div>
        </div>
      </div>
    );
  }
}

export default Chronos;
