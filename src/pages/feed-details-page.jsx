import React from "react";
import PagesStyles from './pages.module.css';
import FeedDetails from "../components/feed-details/feed-details";
import {useDispatch, useSelector} from "react-redux";

export const FeedDetailsPage = ({forAuth}) => {
  
  return (
    <div className={PagesStyles.feed__page}>
      <FeedDetails forAuth={forAuth}/>
    </div>
  )
}


