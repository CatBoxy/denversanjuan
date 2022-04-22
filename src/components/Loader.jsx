import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../assets/loader.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

function Loader() {
  return (
    <>
      <div style={{marginTop: "5rem"}}>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </>
  );
}

export default Loader;
