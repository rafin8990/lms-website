import React, { useState } from 'react';
import './LessonDetails.css';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from '@mui/material';
import { FcExpand } from "react-icons/fc";

const LessonDetails = ({ lesson }) => {
    const { modiuleName, lessons } = lesson;
    const [selectedVideo, setSelectedVideo] = useState(null);
    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className='lessons'>
            <div className='container'>
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<FcExpand />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{modiuleName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                lessons.map((video, i) => (
                                    <li>
                                        <Button key={i} onClick={() => handleVideoSelect(video)}>
                                            {video.lessonTitle}
                                        </Button>
                                    </li>
                                ))
                            }
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <Container maxWidth="sm">
                        <Box sx={{  }} />
                    </Container>
                    {selectedVideo && (
                        <video src={selectedVideo.leasonVideo} controls autoplay width="400" height="300" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonDetails;