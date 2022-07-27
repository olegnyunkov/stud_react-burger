import React from "react";
import FeedIngredientStyles from './feed-ingredient.module.css';
import {useSelector} from "react-redux";

const FeedIngredient = (props) => {
  const {id, index, length} = props;
  const {ingredients} = useSelector(state => state.ingredients)

  const ingredient = ingredients.find((item) => {
    return item._id === id && item
  });

  return (
    <div className={FeedIngredientStyles.feed__ingredient} style={{ zIndex: `${length.length - index}` }}>
      {ingredient &&
        <img
          src={ingredient.image}
          alt={ingredient.name}
          className={FeedIngredientStyles.feed__image}/>}
    </div>
  )
}

export default FeedIngredient;