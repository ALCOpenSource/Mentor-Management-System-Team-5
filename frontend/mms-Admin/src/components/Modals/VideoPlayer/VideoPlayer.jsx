import React from "react";
import PropTypes from "prop-types";
import "./VideoPlayer.css";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

const VideoPlayer = ({ url }) => {
  return (
    <Player autoPlay BigPlayButton={false}>
      <source src={url} />
    </Player>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string
};

export default VideoPlayer;
