/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import courseData from '../../fakeData/courseData';
import Course from '../Course/Course';
import Cart from '../Cart/Cart'
import "./Shop.css"

const Shop = () => {
    const [course, setCourse] = useState(courseData)
    const [cart, setCart] =useState([])

    const handleButton = (course) => {
        const newCart= [...cart,course]
        setCart(newCart)
    }
    return (
        <div className="shop">
            <div className="course-container">
                {
                    course.map((course) => (
                       <Course course={course} handleButton={handleButton}></Course>
                    ))
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;