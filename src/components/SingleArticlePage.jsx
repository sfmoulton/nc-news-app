import React, { Component } from "react";
import axios from "axios";
import styles from "../css-styles/SingleArticlePage.module.css"

class SingleArticlePage extends Component {
  state = {
   articleInfo: {}
  };

  getArticleInfo = () => {
    const { article_id } = this.props;

    axios.get(`https://steph-nc-news-app.herokuapp.com/api/articles/${article_id}`, {
      params: { article_id }
    }).then(response => {
      this.setState({articleInfo: response.data.article})
    });
  };

  componentDidMount = () => {
    this.getArticleInfo();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.uri !== this.props.uri) {
    this.getArticleInfo();
    }
  }

  render() {
    const { title, body, author } = this.state.articleInfo;
    
    

    return (
      <div className={styles.articleContainer}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <h3 className={styles.articleAuthor}>Published By: {author}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default SingleArticlePage;
