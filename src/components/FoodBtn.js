import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: "1.5rem", 
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#4f25f7"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


const FoodBtn = () =>{
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

    return <StyledButton onClick={ShowOptions} variant="contained"> Gimme food suggestion! </StyledButton>
}

export default FoodBtn