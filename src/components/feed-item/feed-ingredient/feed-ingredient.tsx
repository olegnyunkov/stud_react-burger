import React, {FC} from "react";
import FeedIngredientStyles from './feed-ingredient.module.css';
import {useSelector} from "../../../utils/types";

type IFeedIngredient = {
  id: string;
}

// @ts-ignore
//не смог разобраться почему TS выдает на сам компонент ошибку, когда типизируешь пропсы.
const FeedIngredient: FC<IFeedIngredient> = ({id}) => {
  const {ingredients} = useSelector(state => state.ingredients)

  const ingredient = ingredients.find((item) => {
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