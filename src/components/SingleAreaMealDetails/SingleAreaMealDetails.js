import React from 'react';
import '../Category/Meal.css'

const SingleAreaMealDetails = ({ areaMeals }) => {
    const { idMeal, strMeal, strMealThumb } = areaMeals
    const imgStyle = { width: '300px', height: '200px' }
    return (
        <div className="meal">
            <div className="card">
                <div className="card-header">
                    <h5>{strMeal}</h5>
                    <small>ID: {idMeal}</small>
                </div>
                <div className="card-body">
                    <img src={strMealThumb} alt="" style={imgStyle} />
                </div>
            </div>
        </div>
    );
};

export default SingleAreaMealDetails;