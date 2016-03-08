import Config from "../util/config";
import React from "react";
import {Link} from "react-router";
import SideMenuLink from "./side-menu-link.jsx";

const ITEMS = [
  {
    link: '/marathon/apps', label: 'Marathon', enabled: 'marathon.enabled'
  }, {
    link: '/chronos/jobs', label: 'Chronos', enabled: 'chronos.enabled'
  }
];

class SideMenu extends React.Component {

  constructor() {
    super();

    this.state = {
      items: ITEMS.filter(item => Config.get(item.enabled))
    }
  }

  render() {
    return (
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav nav-pills nav-stacked" id="menu" style={{marginTop: '35px'}}>
              {
                this.state.items.map(item => <SideMenuLink {...item} key={item.label}/>)
              }
          </ul>
      </div>
    );
  }
}

export default SideMenu;
