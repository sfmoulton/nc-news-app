import React from "react";

const ErrorPage = ({ err }) => {
  const { msg, status } = err;

  return (
    <div>
      <p>Error Message: {msg}</p>
      <p>{status}</p>
    </div>
  );
};

export default ErrorPage;
