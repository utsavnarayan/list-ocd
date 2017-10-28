import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import { mailFolderListItems, otherMailFolderListItems } from '../main-menu/main-menu';


class Header extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    const sideList = (
      <div>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );


    return (
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton  color="contrast" aria-label="Menu">
            <MenuIcon onClick={this.toggleDrawer('left', true)}/>
          </IconButton>
          <Typography type="title" color="inherit">
            List OCD
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={this.state.left} onRequestClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        </div>
    );
  }
}

export default Header;
