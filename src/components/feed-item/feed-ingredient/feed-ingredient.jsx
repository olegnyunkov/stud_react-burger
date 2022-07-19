import React from "react";
import FeedIngredientStyles from './feed-ingredient.module.css';

const FeedIngredient = () => {

    return (
        <div className={FeedIngredientStyles.feed__ingredient}>
            <img 
            src="https://code.s3.yandex.net/react/code/sauce-04.png" 
            alt="Ингредиент"
            className={FeedIngredientStyles.feed__image} />
        </div>
    )
}

export default FeedIngredient;