import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './home.scss';
import Article from '../article/article';
import ListComponent from '../list/list';
import GridListComponent from '../grid-list/grid-list';
import { imdb, movies } from '../../dummy/lists';

class Home extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/article' render={() => <Article item={movies[0]} />} />
        <Route path='/grid-list' render={() => <GridListComponent items={imdb} />} />
        <Route path='/list' render={() => <ListComponent items={imdb} />} />
      </Switch>
    );
  }
}

export default Home;
