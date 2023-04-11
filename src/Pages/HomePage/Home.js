import React, { useEffect, useState } from 'react';
import './Home.css'
import LessonDetails from './LessonDetails/LessonDetails';

const Home = () => {
    
    const [lessons, setLessons]=useState([])
    
useEffect(()=>{
    fetch('modules.json')
    .then(res=>res.json())
    .then(data=>setLessons(data))
},[])

    return (
        <div className='lessonDiv'>
            {
                lessons.map(lesson=><LessonDetails
                key={lesson.id}
                lesson={lesson}
                ></LessonDetails>)
            }
        </div>
    );
};

export default Home;


