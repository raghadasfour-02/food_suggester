import './App.css';

import React from 'react';
import './App.css'

const App = () =>{
    const ShowOptions = () =>{
      fetch ('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res=>res.json())
      .then(data=> showFoodSuggestion(data.meals))
    }

    const showFoodSuggestion = foods => {
      foods.map((food) => {
        alert(food.strArea)
      })
    }

    return <button onClick={ShowOptions}> Choose my food</button>
}

export default App;
