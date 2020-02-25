import React, { Component } from "react";

class AddArticleComment extends Component {
  state = {
    body: ""
  };

  handleChange = (value, key) => {
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { postNewArticleComment, username, addCommentToList } = this.props;
    const requestBody = { username, body };

    postNewArticleComment(requestBody).then(newComment => {
      addCommentToList(newComment);
      this.setState({ body: "" });
    });
  };

  componentDidUpdate(prevState) {
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Post new comment:
            <input
              required
              type="text"
              onChange={event => this.handleChange(event.target.value, "body")}
              value={this.state.body}
            />
          </label>
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default AddArticleComment;
