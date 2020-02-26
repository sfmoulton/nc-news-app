import React, { Component } from "react";
import * as api from "../api";
import ErrorPage from "./ErrorPage";

class AddArticleVote extends Component {
  state = {
    voteChange: 0,
    err: null
  };

  updateArticleVotes = voteChange => {
    const { article_id } = this.props;

    api.patchArticleVotes(article_id, voteChange);
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + voteChange };
    }).catch(err => {
      this.setState({ err: err });
    });
  };
  render() {
    const { votes } = this.props;
    const { voteChange, err } = this.state;

    return (
      <div>
        <button onClick={() => this.updateArticleVotes(1)}>Up</button>
        <p>Votes: {votes + voteChange}</p>
        <button onClick={() => this.updateArticleVotes(-1)}>Down</button>
        {err && <ErrorPage err={err} />}
      </div>
    );
  }
}

export default AddArticleVote;
