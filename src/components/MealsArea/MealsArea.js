import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Area from '../Area/Area';
import '../Categories/Meals.css'

const MealsArea = () => {
    const areaData = useLoaderData()
    // console.log(areaData.meals)
    return (
        <div className='mt-4'>
            <h3>List of Regions for All Meals</h3>
            <div className='meals'>
                {
                    areaData.meals.map(meal => <Area
                        area={meal}></Area>)
                }
            </div>
        </div>
    );
};

export default MealsArea;