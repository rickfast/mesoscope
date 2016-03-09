import "chart.js";
import React from "react";
import Slaves from "./slaves.jsx";
import SideMenu from "../menu/side-menu.jsx";

class Summary extends React.Component {
  
  render() {
    return (
      <div id="wrapper">
        <SideMenu />
        <div style={{marginTop: "70px"}}>
          <div className="container-fluid xyz">
            <Slaves />
          </div>
        </div>
      </div>
    );
  }
};

export default Summary;
