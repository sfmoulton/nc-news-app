import React, { Component } from 'react';

class ArticlesByUser extends Component {
  state = {
    username: ""
  }
  render() {
    return (
      <div>
        <form>
          <label>Search by username:
            <select id="username">
            
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default ArticlesByUser;