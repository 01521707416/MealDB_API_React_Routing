import React from 'react';
import { Link } from 'react-router-dom';
import '../Category/Meal.css'

const Area = ({ area }) => {
    const { strArea } = area
    return (
        <div className='meal'>
            <p><strong>{strArea}</strong></p>
            <Link to={`/meals/area/${strArea}`}>
                <button className='btn btn-primary btn-sm'>Meals List</button>
            </Link>
        </div>
    );
};

export default Area;