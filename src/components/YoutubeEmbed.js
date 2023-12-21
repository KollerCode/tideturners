import React from "react";
import PropTypes from "prop-types";
import { Row, Col,Container } from "react-bootstrap";

const YoutubeEmbed = ({ embedId }) => (
<div className="video-responsive my-5 section2 ">
<iframe
    mute="true"
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Have You Herd"
/>
</div>
);

YoutubeEmbed.propTypes = {
embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
