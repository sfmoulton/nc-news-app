import React, { Component } from "react";

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
      <form onSubmit={this.handleSubmit}>
        <label>
          Sort articles by:
          <select id="sort_by" onChange={this.handleChange}>
            <option value="created_at">Most Recently Published</option>
            <option value="comment_count">Highest Comment Count</option>
            <option value="votes">Highest Reader Votes</option>
          </select>
        </label>
        <label> 

        </label>
        <button>Sort!</button>
      </form>
    );
  }
}

export default ArticlesSortBy;
