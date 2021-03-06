import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import { getImage } from '../../utils/wiki'

import './grid-list.scss';

class GridListComponent extends Component {
  state = {
    checked: [1],
  };

  componentDidMount(){
    this.props.items.map(item=>{
      getImage(item.title).then(image=>this.setState({[item.rank]:image}));
    });
  }

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
     
      <GridList cols={5} >

        {this.props.items.map(item => (
          
          <GridListTile key={item.rank}>
            <img src={this.state[item.rank]} alt={item.title} />
            <Avatar>{item.rank}</Avatar>
            <GridListTileBar
            title={item.title}
              subtitle={
                item.releaseCountry
              }
              actionIcon={
                <Checkbox
                  onClick={this.handleToggle(item.year)}
                  checked={this.state.checked.indexOf(item.year) !== -1}
                />
              }
            />
          </GridListTile>
        ))}
      </GridList>
    )
  }
}

export default GridListComponent;
