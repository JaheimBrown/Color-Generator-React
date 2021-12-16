import React from "react";
import Lottie from "react-lottie";
import animationData from "./animtaion/18418-round-loader-animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return (
    <div className="loader">
      <Lottie options={defaultOptions} height={175} width={175} />
    </div>
  );
};

export default Loading;
