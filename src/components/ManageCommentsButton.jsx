import React from 'react';
import { Link } from "@reach/router";

const ManageCommentsButton = () => {
  return (
    <div>
      <Link to="/my_comments"><button>Manage my comments</button></Link>
    </div>
  );
};

export default ManageCommentsButton;