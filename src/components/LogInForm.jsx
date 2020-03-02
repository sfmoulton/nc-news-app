import React, { Component } from "react";
import LoadingIndicator from "./LoadingIndicator";
import styles from "../css-styles/LogInForm.module.css";
import { Link } from "@reach/router";

class LogInForm extends Component {
  state = {
    username: "",
    isLoading: false,
    successLogIn: false
  };

  handleChange = (value, key) => {
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    const { changeLoggedInUser } = this.props;

    this.setState({ isLoading: true });
    changeLoggedInUser(username);
    this.setState({ isLoading: false, successLogIn: true });
  };

  render() {
    const { isLoading, successLogIn, username } = this.state;

    if (!successLogIn)
      return (
        <div className={styles.postContainer}>
          <form onSubmit={this.handleSubmit}>
            <label className={styles.textBox}>
              <div className={styles.textBoxLabel}>Username</div>
              <input
                className={styles.usernameInput}
                type="text"
                value={this.state.username}
                onChange={event =>
                  this.handleChange(event.target.value, "username")
                }
              />
            </label>

            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <div>
                <button className={styles.signInButton}>Sign In</button>
              </div>
            )}
          </form>
        </div>
      );

    return (
      <div className={styles.signInMsgContainer}>
        <h2 className={styles.signInMessage}>Hello, {username} <span role="img" label="waving hand">
          {"👋"}
        </span></h2>
        <Link to="/">
          <button className={styles.signInButton}>Get started!</button>
        </Link>
      </div>
    );
  }
}

export default LogInForm;
