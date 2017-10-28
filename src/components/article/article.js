import React, { Component } from 'react';
import './article.scss';





class Article extends Component {
  render() {
    const articleStyles = {
      backgroundImage: 'url(' + this.props.item.image + ')'
    };
    return (
      <article>
        <section className="banner" style={articleStyles}>
          <h1>{this.props.item.title}</h1>
        </section>
        <section className="details">
          {this.props.item.desc}
        </section>
      </article>
    );
  }
}

export default Article;
