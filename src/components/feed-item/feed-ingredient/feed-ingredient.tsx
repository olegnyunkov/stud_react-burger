import React, {FC} from "react";
import FeedIngredientStyles from './feed-ingredient.module.css';
import {TIngredientsData, useSelector} from "../../../utils/types";

interface IFeedIngredient {
  id: string;
}

const FeedIngredient: FC<IFeedIngredient> = (props) => {
  const {id} = props;
  const {ingredients} = useSelector(state => state.ingredients)

  const ingredient = ingredients.find((item: TIngredientsData) => {
    return item._id === id && item
  });

  if(ingredient) {
    return (
      <div className={FeedIngredientStyles.feed__ingredient}>
        {ingredient &&
          <img
            src={ingredient.image}
            alt={ingredient.name}
            className={FeedIngredientStyles.feed__image}/>}
      </div>
    )
  }
}

export default FeedIngredient;