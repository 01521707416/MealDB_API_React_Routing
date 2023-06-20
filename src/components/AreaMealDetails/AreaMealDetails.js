import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleAreaMealDetails from '../SingleAreaMealDetails/SingleAreaMealDetails';
import '../Categories/Meals.css'

const AreaMealDetails = () => {
    const areaMeals = useLoaderData()
    // console.log(areaMeals.meals)
    return (
        <div className='mt-4'>
            <h3>Details by Area</h3>
            <div className='meals'>
                {
                    areaMeals.meals.map(areaMeals => <SingleAreaMealDetails
                        areaMeals={areaMeals}></SingleAreaMealDetails>)
                }
            </div>
        </div>
    );
};

export default AreaMealDetails;