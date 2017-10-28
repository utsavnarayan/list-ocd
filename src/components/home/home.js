import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './home.scss';
import Search from '../search/search';
import Article from '../article/article';
import ListComponent from '../list/list';
import GridListComponent from '../grid-list/grid-list';
import { imdb } from '../../dummy/lists';

class Home extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/article' render={() => <Article title={'Batman'} />} />
        <Route path='/article/:title' component={Article} />
        <Route exact path='/grid-list' render={() => <GridListComponent items={imdb} />} />
        <Route exact path='/list' render={() => <ListComponent items={imdb} />} />
      </Switch>
    );
  }
}

export default Home;
