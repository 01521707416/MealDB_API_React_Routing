import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Category/Meal';
import './Meals.css'

const Meals = () => {
    const meals = useLoaderData()
    return (
        <div className='mt-4'>
            <h3>All Meals Page</h3>
            <h4>Total Meals : {meals.meals.length}</h4>
            <h4>Areas : { }</h4>
            <div className='meals'>
                {
                    meals.meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;