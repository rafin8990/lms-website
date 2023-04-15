import {  ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react';

let theme = createTheme();
theme = responsiveFontSizes(theme);
const VideoPlayer = ({ selectedVideo }) => {
    return <div>
        {selectedVideo && <div>
            <video src={selectedVideo.leasonVideo} controls autoplay width="1000" height="450" />
        </div>}
        {
            selectedVideo && <div style={{color:'white' , marginLeft: '20px'}}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h4'>
                        Now Playing Module {selectedVideo.moduleNo} - {selectedVideo.lessonNumber}
                    </Typography>
                </ThemeProvider>
            </div>
        }
    </div>
};

export default VideoPlayer;