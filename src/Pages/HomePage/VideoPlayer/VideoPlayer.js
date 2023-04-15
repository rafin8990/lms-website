import React from 'react';


const VideoPlayer = ({ selectedVideo }) => {
    return <div>
        {selectedVideo && <div>
            <video src={selectedVideo.leasonVideo} controls autoplay width="1000px" height="450px" />
        </div>}
    </div>
};

export default VideoPlayer;