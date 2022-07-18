import LoginPageStyles from "./login.module.css";
import React from "react";
import IngredientDetails from "../components/ingredient-details/ingredient-details";


export const IngredientDetailsPage = () => {

  return (
    <div className={`${LoginPageStyles.ingredient} pt-10 pl-10 pr-10 pb-15`}>
      <div>
        <p className="text text_type_main-large">Детали ингредиента</p>
      </div>
      <IngredientDetails />
    </div>
  )
}