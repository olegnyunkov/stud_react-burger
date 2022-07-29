import React from "react";
import PagesStyles from './pages.module.css';
import FeedDetails from "../components/feed-details/feed-details";

export const FeedDetailsPage = () => {
  
  return (
    <div className={PagesStyles.feed__page}>
      <FeedDetails />
    </div>
  )
}


