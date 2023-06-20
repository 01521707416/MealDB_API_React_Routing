import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RandomMeal = () => {
    const randomMeal = useLoaderData()
    const { strArea, strCategory, strInstructions, strMealThumb, strMeal } = randomMeal.meals[0]
    const imageStyle = { width: '400px', height: '320px' }
    // console.log(data.meals[0])
    return (
        <div className='mt-4'>
            <div className='row m-4'>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className='text-primary'>Random Meal Details</h4>
                        </div>
                        <div className="card-body">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Origin</th>
                                        <th>Category</th>
                                        <th>Instructions</th>
                                        <th>Photo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{strMeal}</td>
                                        <td>{strArea}</td>
                                        <td>{strCategory}</td>
                                        <td>{strInstructions.slice(0, 600)}</td>
                                        <td><img src={strMealThumb} alt="" style={imageStyle} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomMeal;