import React from 'react';
import "./Course.css"
import Button from 'react-bootstrap/Button';

const Course = (props) => {
    const {name,instructor,price,image}= props.course;
    return (
        <div className="course">
            <div>
                <img src={image}></img>
            </div>
            <div>
                <h1>Name: {name}</h1>
                <h2>Instructor: {instructor}</h2>
                <h3>Price: {price}</h3>
                <Button variant="warning" onClick={() => (props.handleButton(props.course))}>Enroll now</Button>
            </div>
            
        </div>
    );
};

export default Course;