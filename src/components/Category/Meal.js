import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'

const Meal = ({ meal }) => {
    const { idMeal, strMeal } = meal
    console.log(meal)
    return (
        <div className='meal'>
            <p><strong>ID: </strong> {idMeal}</p>
            <p><strong>Name: </strong>{strMeal}</p>
            <Link to={`/meal/${idMeal}`}>
                <button className='btn btn-primary btn-sm btn-outline'>Details</button>
            </Link>
        </div >
    );
};

export default Meal;