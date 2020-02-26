import React from 'react';

const ErrorPage = ({msg, status}) => {
  return (
    <div>
      <p>Error</p>
      <p>{msg}</p>
      <p>{status}</p>
    </div>
  );
};

export default ErrorPage;