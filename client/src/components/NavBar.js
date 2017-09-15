import React from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return(
      <Menu>
        <Menu.Menu style={{ cursor: 'pointer'}} position="right">
          <Menu.Item name="Home" />
          <Menu.Item name="Edit Profile" />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
