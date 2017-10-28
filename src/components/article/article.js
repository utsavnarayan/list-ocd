import React, { Component } from 'react';
import './article.css';
import { movies } from '../../dummy/lists';

const articleStyles = {
  backgroundImage: 'url(' + movies[0].image + ')'
};


class Article extends Component {
  render() {
    return (
      <article>
        <section class="banner" style={articleStyles}>
          <h1>{movies[0].title}</h1>
        </section>
        <section class="details">
          {movies[0].desc}
        </section>
      </article>
    );
  }
}

export default Article;
