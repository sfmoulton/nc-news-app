import React, { Component } from "react";

class AddArticleComment extends Component {
  state = {
    username: "",
    commentBody: ""
  };

  handleChange = (value, key) => {
    this.setState({[key]: value});
  }

  render() {
    console.log(this.props.article_id);
    
    return (
      <>
        <h2>Add new comment:</h2>
        <form>
          <label>
            Username:
            <input type="text" id="username" value={this.state.username} />
          </label>
          <label>
            Comment:
            <input type="text" id="body" value={this.state.commentBody} />
          </label>
          <button>Post comment</button>
        </form>
      </>
    );
  }
}

export default AddArticleComment;
