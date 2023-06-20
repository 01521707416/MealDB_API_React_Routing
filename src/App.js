import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Meals from './components/Categories/Meals';
import MealDetails from './components/MealDetails/MealDetails';
import RandomMeal from './components/RandomMeal/RandomMeal';
import MealsArea from './components/MealsArea/MealsArea';
import AreaMealDetails from './components/AreaMealDetails/AreaMealDetails';
function App() {

  const router = createBrowserRouter([{
    path: '/', element: <Main></Main>, children: [
      { path: '/', element: <Home></Home> },
      { path: '/home', element: <Home></Home> },
      {
        path: '/categories',
        loader: async () => {
          return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        },
        element: <Meals></Meals>
      },
      {
        path: '/meal/:idMeal',
        loader: async ({ params }) => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
        },
        element: <MealDetails></MealDetails>
      },
      {
        path: '/random',
        loader: async () => {
          return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        },
        element: <RandomMeal></RandomMeal>
      },
      {
        path: '/area',
        loader: async () => {
          return fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        },
        element: <MealsArea></MealsArea>
      },
      {
        path: '/meals/area/:mealArea',
        loader: async ({ params }) => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.mealArea}`)
        },
        element: <AreaMealDetails></AreaMealDetails>
      }
    ]
  },
  { path: '*', element: <div>Route not found!</div> }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
