import React, { useEffect, useState } from 'react';
import './Home.css'
import LessonDetails from './LessonDetails/LessonDetails';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import { ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import { Height } from '@mui/icons-material';


let theme = createTheme();
theme = responsiveFontSizes(theme);
const Home = () => {

    const [data, setData] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null);


    useEffect(() => {
        fetch('modules.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div>
            <div style={{ width: '1440px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h3'>Swachh Akshar LMS Website</Typography>
                </ThemeProvider>
            </div>
            <div style={{ display: 'flex', width: '1440px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', height: '500px',  }}>
                <div style={{ width: "30%", }}>
                    {
                        data.map(module => <LessonDetails
                            key={module.id}
                            lesson={module}
                            setSelectedVideo={setSelectedVideo}
                        ></LessonDetails>)
                    }
                </div>
                <div className='videoPlayer' style={{ width: "70%", backgroundColor: 'black' }}>
                    <VideoPlayer
                        selectedVideo={selectedVideo}
                    ></VideoPlayer>
                </div>
            </div>
        </div>
    );
};

export default Home;


