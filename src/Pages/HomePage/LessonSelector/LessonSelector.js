import React from 'react';

const LessonSelector = ({ moduleData, onLessonSelect }) => {
    const data=moduleData.lessons
    return (
        <ul>
            {data.map((lesson) => (
                <li key={lesson.name} onClick={() => onLessonSelect(lesson)}>
                    {lesson.name}
                </li>
            ))}
        </ul>
    );
};

export default LessonSelector;