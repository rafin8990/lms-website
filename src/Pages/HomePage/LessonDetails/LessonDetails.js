import React from 'react';
import './LessonDetails.css';
import { Accordion, AccordionDetails, AccordionSummary,  Button, Typography } from '@mui/material';
import { FcExpand } from "react-icons/fc";

const LessonDetails = ({ lesson, setSelectedVideo }) => {
    const { name, lessons } = lesson;
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
                            <Typography>{name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                lessons.map((video, i) => (
                                    <li>
                                        <Button key={i} onClick={() => handleVideoSelect(video)}>
                                            {video.name}
                                        </Button>
                                    </li>
                                ))
                            }
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default LessonDetails;