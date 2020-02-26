import React from "react";
import Loader from "react-loader-spinner";

const LoadingIndicator = () => {
  return (
    <Loader color="red" className="loader" type="Oval" height={50} width={50} />
  );
};

export default LoadingIndicator;
