import React, { Component } from "react";
import * as api from "../api";
import ErrorPage from "./ErrorPage";

class AddVote extends Component {
  state = {
    voteChange: 0,
    err: null,
    hasVoted: false
  };

  updateVotes = voteChange => {
    const { article_id, comment_id } = this.props;

    if (comment_id === undefined) {
      api.patchArticleVotes(article_id, voteChange).catch(err => {
        this.setState({ err: err });
      });
      this.setState(currentState => {
        return {
          voteChange: currentState.voteChange + voteChange,
          hasVoted: true
        };
      });
    } else if (article_id === undefined) {
      api.patchCommentVotes(comment_id, voteChange).catch(err => {
        this.setState({ err: err });
      });
      this.setState(currentState => {
        return {
          voteChange: currentState.voteChange + voteChange,
          hasVoted: true
        };
      });
    }
  };

  render() {
    const { votes } = this.props;
    const { voteChange, err, hasVoted } = this.state;

    return (
      <div>
        <button disabled={hasVoted} onClick={() => this.updateVotes(1)}>
          Up
        </button>
        <p>Votes: {votes + voteChange}</p>
        <button disabled={hasVoted} onClick={() => this.updateVotes(-1)}>
          Down
        </button>
        {err && <ErrorPage err={err} />}
      </div>
    );
  }
}

export default AddVote;
