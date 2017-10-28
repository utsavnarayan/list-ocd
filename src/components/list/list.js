import React, { Component } from 'react';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

import './list.scss';


class ListComponent extends Component {
  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    return (
      <List>
        {this.props.items.map(item => (
          <ListItem key={item.year} dense button>
            <Avatar>{item.rank}</Avatar>
            <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/en/7/79/Hahk.jpg" />
            <ListItemText primary={item.title} />
            <ListItemSecondaryAction>
              <Checkbox
                onClick={this.handleToggle(item.year)}
                checked={this.state.checked.indexOf(item.year) !== -1}
              />
            </ListItemSecondaryAction>

          </ListItem>
        ))}
      </List>
    )
  }
}

export default ListComponent;
