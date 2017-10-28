import React, { Component } from 'react';
import './home.scss';
import Article from '../article/article';
import List from '../list/list';
import { imdb, movies } from '../../dummy/lists';

class Home extends Component {
  render() {
    return (
      [<Article key="article" item={movies[0]} />,
      <List key="list" items={imdb}/>]
    );
  }
}

export default Home;
