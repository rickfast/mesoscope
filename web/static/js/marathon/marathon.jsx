import React from "react";
import SideMenu from "../menu/side-menu.jsx";
import Apps from "./apps.jsx";

class Marathon extends React.Component {

  render() {
    return (
      <div id="wrapper">
        <SideMenu />
        <div style={{marginTop: "70px"}}>
          <div className="container-fluid xyz">
            <Apps />
          </div>
        </div>
      </div>
    );
  }
}

export default Marathon;
