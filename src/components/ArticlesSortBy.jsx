import React, { Component } from "react";
import styles from "../css-styles/ArticlesSortBy.module.css";

class ArticlesSortBy extends Component {
  state = {
    sort_by: null
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    const { sort_by } = this.state;
    event.preventDefault();
    this.props.getArticles(sort_by);
    this.setState({ sort_by: null });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.formLabel}>
            Sort by:
            <select
              className={styles.dropDown}
              id="sort_by"
              onChange={this.handleChange}
            >
              <option value="created_at">Most Recently Published</option>
              <option value="comment_count">Highest Comment Count</option>
              <option value="votes">Highest Reader Votes</option>
            </select>
          </label>
          <label></label>
          <button className={styles.goButton}>Go!</button>
        </form>
      </div>
    );
  }
}

export default ArticlesSortBy;
