import React from "react";
import Loader from "react-loader-spinner";

const LoadingIndicator = () => {
  return (
    <Loader type="BallTriangle" color="#somecolor" height={80} width={80} />
  );
};

export default LoadingIndicator;
