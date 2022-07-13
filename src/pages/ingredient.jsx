import ModalStyles from "../components/modal/modal.module.css";
import React from "react";
import IngredientDetails from "../components/ingredient-details/ingredient-details";


export const IngredientDetailsPage = () => {

  return (
    <div className={`${ModalStyles.modal} pt-10 pl-10 pr-10 pb-15`}>
      <div className={ModalStyles.modal__title}>
        <p className="text text_type_main-large">Детали ингредиента</p>
      </div>
      <IngredientDetails />
    </div>
  )
}