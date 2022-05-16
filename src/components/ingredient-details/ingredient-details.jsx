import React, {useState} from 'react';
import IngredientDetailsStyles from './ingredient-details.module.css';

const IngredientDetails = ({modalInfo}) => {
  
    return (
      <>
        <div className={IngredientDetailsStyles.ingredient__list}>
          <img src={modalInfo.image_large} alt={modalInfo.name}/>
          <p className={`${IngredientDetailsStyles.ingredient__title} text text_type_main-medium mt-4`}>{modalInfo.name}</p>
          <div className={`${IngredientDetailsStyles.ingredient__description} mt-8`}>
            <div className={'mr-5'}>
              <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
              <p className="text text_type_digits-default text_color_inactive">{modalInfo.calories}</p>
            </div>
            <div className={'mr-5'}>
              <p className="text text_type_main-default text_color_inactive">Белки, г</p>
              <p className="text text_type_digits-default text_color_inactive">{modalInfo.proteins}</p>
            </div>
            <div className={'mr-5'}>
              <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
              <p className="text text_type_digits-default text_color_inactive">{modalInfo.fat}</p>
            </div>
            <div>
              <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
              <p className="text text_type_digits-default text_color_inactive">{modalInfo.carbohydrates}</p>
            </div>
          </div>
        </div>
      </>
    )
  };

export default IngredientDetails;