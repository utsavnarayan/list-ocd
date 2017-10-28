import React, { Component } from 'react';
import './article.scss';
import { getInfo, getImage, getSummary } from '../../utils/wiki'


class Article extends Component {
  state = {
    info: ""
  }
  componentDidMount() {
    getInfo(this.props.item.title).then(console.log);
    getSummary(this.props.item.title).then(summary=> this.setState({info:summary}));
    getImage(this.props.item.title).then(result => this.setState({image : result}));
  }
  render() {
    const articleStyles = {
      backgroundImage: 'url(' + this.state.image + ')'
    };


    return (
      <article>
        <section className="banner" style={articleStyles}>
          <h1>{this.props.item.title}</h1>
        </section>
        <section className="details">
          {this.state.info}
        </section>
      </article>
    );
  }
}

export default Article;
