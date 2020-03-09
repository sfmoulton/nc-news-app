import React, { Component } from "react";
import * as api from "../api";
import ErrorPage from "./ErrorPage";
import styles from "../css-styles/AddVote.module.css";
import LoadingIndicator from "./LoadingIndicator";

class AddVote extends Component {
  state = {
    voteChange: 0,
    err: null,
    // hasVotedUp: false,
    // hasVotedDown: false,
    isLoading: null
  };

  updateVotes = voteChange => {
    const { article_id, comment_id } = this.props;

    if (comment_id === undefined) {
      this.setState({ isLoading: true });
      api.patchArticleVotes(article_id, voteChange).catch(err => {
        this.setState({ err: err });
      });
      this.setState(currentState => {
        return {
          voteChange: currentState.voteChange + voteChange,
          // hasVoted: true,
          isLoading: false
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
    const { voteChange, err, hasVoted, isLoading } = this.state;

    return (
      <div className={styles.voteContainer}>
        <button
          className={styles.voteButton}
          disabled={hasVoted}
          onClick={() => this.updateVotes(1)}
        >
          <span role="img" label="plus">
            {"➕"}
          </span>
        </button>
        <p className={styles.votes}>Current votes: {votes + voteChange}</p>
        <button
          className={styles.voteButton}
          // disabled={hasVoted}
          onClick={() => this.updateVotes(-1)}
        >
          <span role="img" label="minus">
            {"➖"}
          </span>
        </button>
        {isLoading && <LoadingIndicator />}
        {err && <ErrorPage err={err} />}
      </div>
    );
  }
}

export default AddVote;
